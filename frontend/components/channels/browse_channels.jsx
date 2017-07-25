import React from 'react';
import ChannelsIndexContainer from './channels_index_container';
import { Route } from 'react-router-dom';

const BrowseChannels = () => (
  <section className='browse-channels'>
    <div id='follow-bar-placeholder'></div>
    <section className='browse-container'>
      <ChannelsIndexContainer />
    </section>
  </section>
);

export default BrowseChannels;
