import './styles/main.scss';

import React from 'react'
import { render } from 'react-dom';
import store from './store/configureStore'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { isTokenValid, removeToken } from './helpers/auth'
import { getUserRequest } from './sagas/auth'

import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

const history = syncHistoryWithStore(hashHistory, store)

const getNodeHMR = (RootComponent) => {
  return (
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>
  );
}

const rootNode = (
  <Root store={store} history={history} />
)

const renderApp = (node) => {
  render(
    node,
    document.getElementById('root')
  )
}


if (isTokenValid()) {
  store.runSaga(getUserRequest).done.then(() => {
    renderApp(rootNode);
  })
} else {
  removeToken()
  renderApp(rootNode);
}

if (process.env.IS_DEVELOP && module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    renderApp(getNodeHMR(NextRoot));
  })
   module.hot.accept()
 }

