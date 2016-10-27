import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Welcome from './pages/welcome'
import PageNotFound from './pages/notFound'
import User from './containers/User'
import Todo from './containers/Todo'
import Years from './containers/Years'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome} />
      <Route path='/user' component={User} />
      <Route path='/todo' component={Todo} />
      <Route path='/years' component={Years} />
    </Route>
    <Route path='*' component={PageNotFound} />
  </div>
)