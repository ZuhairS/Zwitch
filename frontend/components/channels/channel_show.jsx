import React from 'react';
import ChannelDetailContainer from './channel_detail_container';
import { Route } from 'react-router-dom';

const ChannelShow = props => (
  <section className='channel-detail'>
    <div id='follow-bar-placeholder'></div>
    <ChannelDetailContainer channelId={props.match.params.channelId}/>
    <div id='chat-placeholder'></div>
  </section>
);

export default ChannelShow;
