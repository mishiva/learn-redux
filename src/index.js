import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/app.css';
import store from './store/configureStore'
import { Router, hashHistory } from 'react-router'
import { routes } from './routes'
import { syncHistoryWithStore } from 'react-router-redux'

import { isTokenValid, removeToken } from './helpers/auth'

const history = syncHistoryWithStore(hashHistory, store)


!isTokenValid() && removeToken();

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
