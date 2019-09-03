import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/Login';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/HomePage';
import AccountPage from '../Account/Account';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import LIST from '../To-do/TodoList.js';

//import TodoList from '../To-do/TodoList.js';

//import TodoList from './components/To-do';

const App = () => (
  
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.LIST} component={LIST} />
    </div>
  </Router>
  
);

export default withAuthentication(App);