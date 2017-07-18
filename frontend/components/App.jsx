import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import AuthFormContainer from './auth_form/auth_form_container';

const App = () => (
  <div>
    <header>
      <h1>Welcome to the awesomeness that will be Zwitch!</h1>
    </header>

    <AuthRoute path="/login" component={AuthFormContainer} />
    <AuthRoute path="/signup" component={AuthFormContainer} />
  </div>
);

export default App;
