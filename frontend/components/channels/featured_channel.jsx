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
          <FeaturedVideo />
          <aside id='featured-description'>

            <div id='profile-image'>
              <img src={featuredChannel.profile_image_url}></img>
            </div>

            <div id='featured-stream-info'>
              <h3>{featuredChannel.channel_name} streaming {featuredChannel.stream_name}</h3>
              <p>Description Placeholder</p>
            </div>

            <Link to={`/channels/${featuredChannel.id}`}>Go to Channel</Link>

          </aside>
        </div>
      );
    }
  }

}
