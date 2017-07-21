import React from 'react';
import Youtube from 'react-youtube';

export default class FeaturedVideo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

}
