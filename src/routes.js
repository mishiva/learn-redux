import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux'

import App from './containers/App'
import Welcome from './pages/welcome'
import PageNotFound from './pages/notFound'
import User from './containers/User'
import Todo from './containers/Todo'
import Years from './containers/Years'


// Redirects to /login by default
const IsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user, // how to get the user state
  authenticatingSelector: state => state.isAuth,
  // predicate: auth => auth.isAuth,
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'IsAuthenticated' // a nice name for this auth check
})

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome} />
      <Route path='/login' component={Welcome} />
      <Route path='/user' component={User} />
      <Route path='/todo' component={IsAuthenticated(Todo)} />
      <Route path='/years' component={Years} />
      <Route path='*' component={PageNotFound} />
    </Route>
  </div>
)