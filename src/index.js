import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/app.css';
import store from './store/configureStore'
import { Router, hashHistory } from 'react-router'
import { routes } from './routes'
import { syncHistoryWithStore } from 'react-router-redux'

import { isTokenValid, removeToken } from './helpers/auth'
import { getUserRequest } from './sagas/auth'

const history = syncHistoryWithStore(hashHistory, store)

const node = (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
);

const renderApp = (node) => {
  render(
    node,
    document.getElementById('root')
  )
}


if (isTokenValid()) {
  store.runSaga(getUserRequest).done.then(() => {
    renderApp(node);
  })
} else {
  removeToken()
  renderApp(node);
}



