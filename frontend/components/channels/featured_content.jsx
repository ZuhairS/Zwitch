import React from 'react';
import AuthFormContainer from '../auth_form/auth_form_container';
import FeaturedChannelContainer from './featured_channel_container';
import FeaturedChannelsContainer from './featured_channels_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

const FeaturedContent = (props) => (
  <section className="featured-content">
    <FeaturedChannelContainer props={props}/>
    <FeaturedChannelsContainer props={props}/>

    <section className="auth-form-modal">
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
    </section>
  </section>
);

export default FeaturedContent;
