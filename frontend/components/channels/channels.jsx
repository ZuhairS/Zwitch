import React from 'react';
import { Link } from 'react-router-dom';
import { youtubeIdExtractor } from '../../util/video_util';

export default class Channels extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.requestChannels();
  }

  render() {
    const channels = this.props.channels;
    const title = this.props.title;

    if (channels) {
      return (
        <section className="channels-container">
         <h1>{title}</h1>
         <ul className='flex-grid channels'>
           {channels.map(channel => (
            <li key={channel.id} className="featured-channel-item">

              <Link to={`/channels/${channel.id}`}>
                <img
                  src={`https://img.youtube.com/vi/${youtubeIdExtractor(channel.video_url)}/maxresdefault.jpg`}
                  alt={channel.channel_name}
                  />
              </Link>

              <span id='channel-info'>
                <Link className='link' to={`/channels/${channel.id}`}>
                  <h4>{ channel.stream_name }</h4>
                </Link>
                <p>{'Some viewers on '}
                  <Link className='link' to={`/channels/${channel.id}`}>
                    <strong>{channel.channel_name}</strong>
                  </Link>
                </p>
              </span>

            </li>
          )
        )}
         </ul>
       </section>
      );
    } else {
      return (
        <h1>HELLO!</h1>
      );
    }
  }

}
