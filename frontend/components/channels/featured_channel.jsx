import React from 'react';
import FeaturedVideo from '../videos/featured_video';

export default class FeaturedChannel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const featuredChannel = this.props.featuredChannel;

    if (featuredChannel) {
      return (
        <div id='featured-container'>
          <FeaturedVideo />
          <aside>
            <img></img>
          </aside>
        </div>
      );
    }
  }

}
