import React from 'react';
import { Route } from 'react-router';
import App from './App';
import SignUp from './components/users/SignUp'
import TaskResource from './components/tasks/index'

export default (
  <Route path="/" component={App} >
    <Route path="signup" component={SignUp} />
  </Route>
);
