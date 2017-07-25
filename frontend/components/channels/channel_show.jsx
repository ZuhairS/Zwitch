import React from 'react';
import ChannelDetailContainer from './channel_detail_container';
import { Route } from 'react-router-dom';

const ChannelShow = () => (
  <section className='channel-detail'>
    <div id='follow-bar-placeholder'></div>
    <ChannelDetailContainer />
    <div id='chat-placeholder'></div>
  </section>
);

export default ChannelShow;
