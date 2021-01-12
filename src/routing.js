import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import {
  Auth,
  NoPage,
  Profile,
  rest,
} from 'freenit'
import Dashboard from 'pages/dashboard'
import Landing from 'pages/landing'
import Role from 'pages/role'
import User from 'pages/user'


const API_ROOT = '/api/v0'


const Routing = () => {
  window.rest = rest(API_ROOT)
  window.rest.API_ROOT = API_ROOT
  return (
    <Switch>
      <Route exact path="/" component={Landing.Detail} />
      <Route exact path="/confirm/:token" component={Auth.Confirm} />
      <Route exact path="/dashboard" component={Dashboard.Detail} />
      <Route exact path="/login" component={Auth.Login} />
      <Route exact path="/profile" component={Profile.Detail} />
      <Route exact path="/register" component={Auth.Register} />
      <Route exact path="/reset" component={Auth.Reset} />
      <Route exact path="/reset/:token" component={Auth.ChangePassword} />
      <Route exact path="/role/:id" component={Role.Detail} />
      <Route exact path="/roles" component={Role.List} />
      <Route exact path="/roles/:page" component={Role.List} />
      <Route exact path="/user/:id" component={User.Detail} />
      <Route exact path="/users" component={User.List} />
      <Route exact path="/users/:page" component={User.List} />
      <Route path="*" component={NoPage.Detail} />
    </Switch>
  )
}


export default Routing
