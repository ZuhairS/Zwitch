import React from 'react';

export default class Featured extends React.component {

  constructor(props) {
    super(props);
  }

  render() {
    const featuredChannel = this.props.featuredChannel;
    const featuredChannels = this.props.featuredChannels;

    if (featuredChannel) {
      return (
        <div></div>
      );
    }

    if (featuredChannels) {
      return (
        <div></div>
      );
    }
  }

}
