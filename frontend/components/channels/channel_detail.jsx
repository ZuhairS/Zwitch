import React from 'react';
import { Link } from 'react-router-dom';
import ChannelVideo from '../videos/channel_video';

export default class ChannelDetail extends React.Component {

  constructor(props) {
    super(props);
    this.channelId = this.props.match.params.channelId;
  }

  componentDidMount() {
    this.props.requestSingleChannel(this.channelId);
  }

  render() {
    const channel = this.props.channel;

    if (channel) {
      return (
        <section className='channel-detail-container'>

          <nav className='channel-detail-nav'>
            <div id='img-placeholder'>
              <img id='channel-profile-image' src={channel.profile_image_url} />
            </div>
            <h2>{channel.channel_name}</h2>
            <h3>{channel.owner_name}</h3>
            <h3>Follows: 0</h3>
            <h3>Following: 0</h3>
            <div id='follow-button-container'>
              <button id='follow-button'>Follow</button>
            </div>
          </nav>

          <section id='channel-video-container'>
            <ChannelVideo videoUrl={channel.video_url} />
            <div id='channel-video-description'></div>
          </section>

        </section>
      );
    } else {
      return (
        <div>Fetching...</div>
      );
    }
  }

}
