import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedVideo from '../videos/featured_video';

export default class FeaturedChannel extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFeaturedChannel();
  }

  render() {

    const featuredChannel = this.props.featuredChannel;
    if (featuredChannel) {
      return (
        <div id='featured-container'>
          <FeaturedVideo videoUrl={featuredChannel.video_url} />
          <aside id='featured-description'>

            <div id='profile-image'>
              <img src={featuredChannel.profile_image_url}></img>
            </div>

            <div id='featured-stream-info'>
              <h3>
                <strong>
                  {featuredChannel.channel_name}
                </strong>
                {' streaming'}
                <strong>
                  {` ${featuredChannel.stream_name}`}
                </strong>
              </h3>
              <p>{featuredChannel.stream_description}</p>
            </div>

            <Link id='go-to-channel' to={`/channels/${featuredChannel.id}`}>Go to Channel</Link>

          </aside>
        </div>
      );
    }
  }

}
