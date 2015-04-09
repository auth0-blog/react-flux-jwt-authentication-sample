import Router from 'react-router';
var {Route} = Router;
import AuthenticatedApp from './components/AuthenticatedApp'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import React from 'react';
import RouterContainer from './services/RouterContainer'
import LoginActions from './actions/LoginActions'

var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="home" path="/" handler={Home}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

