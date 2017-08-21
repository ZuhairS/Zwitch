import React from 'react';
import { Link } from 'react-router-dom';
import { youtubeIdExtractor } from '../../util/video_util';

export default class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestChannels();
  }

  componentWillReceiveProps() {
    this.props.requestChannels();
  }

  render() {
    const channels = this.props.channels;
    const title = this.props.title;
    const className = this.props.className;

    if (channels) {
      return (
        <section className={className}>
          <h1>
            {title}
          </h1>
          <ul className="flex-grid channels">
            {channels.map(channel =>
              <li key={channel.id} className="channel-item">
                <Link to={`/channels/${channel.id}`}>
                  <img
                    src={`https://img.youtube.com/vi/${youtubeIdExtractor(
                      channel.video_url
                    )}/maxresdefault.jpg`}
                    alt={channel.channel_name}
                  />
                </Link>

                <span id="channel-info">
                  <Link className="link" to={`/channels/${channel.id}`}>
                    <h4>
                      {channel.stream_name}
                    </h4>
                  </Link>
                  <p>
                    {Math.floor(Math.random() * 1000 + 1) + ' viewers on '}
                    <Link className="link" to={`/channels/${channel.id}`}>
                      <strong>
                        {channel.channel_name}
                      </strong>
                    </Link>
                  </p>
                </span>
              </li>
            )}
          </ul>
        </section>
      );
    } else {
      return <div>Fetching...</div>;
    }
  }
}
