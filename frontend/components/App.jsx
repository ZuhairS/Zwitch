import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import AuthFormContainer from './auth_form/auth_form_container';
import NavbarContainer from './navbar/navbar_container';
import FeaturedChannelContainer from './channels/featured_channel_container';

const App = () => (
  <section className="zwitch">
    <NavbarContainer />
    <section className="main-content">

      <FeaturedChannelContainer />

      <section className="auth-form-modal">
        <AuthRoute path="/login" component={AuthFormContainer} />
        <AuthRoute path="/signup" component={AuthFormContainer} />
      </section>

    </section>

  </section>
);

export default App;
