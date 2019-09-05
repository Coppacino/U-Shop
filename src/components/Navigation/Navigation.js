import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut/Logout';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigations = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Pagina Iniziale</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Pagina Iniziale</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Accedi o Registrati</Link>
    </li>
  </ul>
);

export default Navigations;