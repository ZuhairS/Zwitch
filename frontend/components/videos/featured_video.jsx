import React from 'react';
import YouTube from 'react-youtube';

export default class FeaturedVideo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        const options = {
            height: '540',
            width: '960'
        };
        return(
          <YouTube videoId='8pR0o2fGyHg' id="featured"
            opts={options} onReady={this._onReady}/>
        );
    }

}
