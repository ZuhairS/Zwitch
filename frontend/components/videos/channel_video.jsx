import React from 'react';
import YouTube from 'react-youtube';
import { youtubeIdExtractor } from '../../util/video_util';

export default class ChannelVideo extends React.Component {

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
        height: '1080',
        width: '1920',
        playerVars: {
          autoplay: 1,
          controls: 2,
          disablekb: 1,
          modestbranding: 0,
          rel: 0,
          iv_load_policy: 3,
          showinfo: 0
        }
    };

    if (videoId) {
      return(
        <YouTube videoId={videoId} id="channel-video"
          opts={options} onEnd={this.onEnd}/>
      );
    } else {
      return (
        <div className='no-vid'></div>
      );
    }
  }
}
