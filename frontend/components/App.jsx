import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import FeaturedContent from './channels/featured_content';
import BrowseChannels from './channels/browse_channels';
import ChannelShow from './channels/channel_show';
import FollowContainer from './follow/follow_container';
import ChatContainer from './chat/chat_container';
import ChannelFormContainer from './channels/channel_form_container';

const App = () => (
  <section className="zwitch">
    <Route component={ScrollToTop} />
    <NavbarContainer />
    <div id='navbar-placeholder'></div>
    <Route path='/channels' component={FollowContainer} />
    <Route path='/channels/:channelId' component={ChatContainer} />

    <Switch>
      <Route path='/channels/:channelId' component={ChannelShow} />
      <Route path='/channels' component={BrowseChannels} />
      <Route path='/' component={FeaturedContent} />
    </Switch>
  </section>
);

// Allows scrolling back to top on visiting new pages.
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
