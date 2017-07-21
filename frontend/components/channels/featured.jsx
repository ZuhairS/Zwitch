import React from 'react';
import FeaturedVideo from '../videos/featured_video';

export default class Featured extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const featuredChannel = this.props.featuredChannel;
    const featuredChannels = this.props.featuredChannels;

    if (featuredChannel) {
      return (
        <FeaturedVideo />
      );
    }

    if (featuredChannels) {
      return (
        <div></div>
      );
    }
  }

}
