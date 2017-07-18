import React from 'react';
import { Route } from 'react-router-dom';
import AuthFormContainer from './auth_form/auth_form_container';

const App = () => (
  <div>
    <header>
      <h1>Welcome to the awesomeness that will be Zwitch!</h1>
    </header>

    <Route path="/login" component={AuthFormContainer} />
    <Route path="/signup" component={AuthFormContainer} />
  </div>
);

export default App;
