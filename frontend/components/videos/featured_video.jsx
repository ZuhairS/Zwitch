import React from 'react';
import YouTube from 'react-youtube';
import { youtubeIdExtractor } from '../../util/video_util';

export default class FeaturedVideo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const options = {
        height: '540',
        width: '960'
    };

    const videoUrl = this.props.videoUrl;

    if (videoUrl) {
      return(
        <YouTube videoId={youtubeIdExtractor(videoUrl)} id="featured"
          opts={options} onReady={this._onReady}/>
      );
    } else {
      return (
        <div id='no-vid'></div>
      );
    }
  }
}
