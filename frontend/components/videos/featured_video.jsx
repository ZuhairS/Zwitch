import React from 'react';
import YouTube from 'react-youtube';

export default class FeaturedVideo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        const opts = {
            height: '390',
            width: '640'
        };
        return(
          <YouTube videoId={this.props.youtube_video_id} opts={opts} onReady={this._onReady}/>
        );
    }

}
