import React from 'react'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import { AppShell } from './Components'
// Next import the components based on routes

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppShell}>
      //Add routes here
    </Route>
  </Router>
)

export default routes