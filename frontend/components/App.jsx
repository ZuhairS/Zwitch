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
import FeaturedChannelsContainer from './channels/featured_channels_container';
import ChannelsIndexContainer from './channels/channels_index_container';
import ChannelDetailContainer from './channels/channel_detail_container';
import FollowContainer from './follow/follow_container';

const App = () => (
  <section className="zwitch">
    <NavbarContainer />
    <div id='navbar-placeholder'></div>
    <Route path='/channels' component={FollowContainer} />

    <section className="featured-content">
      <Route exact path="/" component={FeaturedChannelContainer} />
      <Route exact path="/" component={FeaturedChannelsContainer} />

      <section className="auth-form-modal">
        <AuthRoute path="/login" component={AuthFormContainer} />
        <AuthRoute path="/signup" component={AuthFormContainer} />
      </section>
    </section>

    <section className='browse-channels'>
      <Route path='/channels' render={() => <div id='follow-bar-placeholder'></div>} />
      <section className='browse-container'>
        <Route exact path='/channels' component={ChannelsIndexContainer} />
      </section>
    </section>

    <section className='channel-detail'>
      <Route path='/channels' render={() => <div id='follow-bar-placeholder'></div>} />
      <Route path='/channels/:channelId' component={ChannelDetailContainer} />
      <Route path='/channels/:channelId' render={() => <div id='chat-placeholder'></div>} />
    </section>

  </section>
);

export default App;
