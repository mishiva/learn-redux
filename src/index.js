import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/app.css';
import store from './store/configureStore'

import { Router, hashHistory } from 'react-router'
import { routes } from './routes'

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
