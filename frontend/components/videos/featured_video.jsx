import React from 'react';
import YouTube from 'react-youtube';
import { youtubeIdExtractor } from '../../util/video_util';

export default class FeaturedVideo extends React.Component {

  constructor(props) {
    super(props);
  }

  onEnd(event) {
    event.target.playVideo();
  }

  render() {

    const videoUrl = this.props.videoUrl;
    let videoId;

    if (videoUrl) {
      videoId = youtubeIdExtractor(this.props.videoUrl);
    }

    const options = {
        // height: '720',
        // width: '1280',
        playerVars: {
          autoplay: 1,
          controls: 2,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          showinfo: 0
        }
    };

    if (videoId) {
      return(
        <YouTube videoId={videoId} id="featured"
          opts={options} onEnd={this.onEnd}/>
      );
    } else {
      return (
        <div id='no-vid'></div>
      );
    }
  }
}
