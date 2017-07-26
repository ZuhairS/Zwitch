import React from 'react';
import merge from 'lodash/merge';
import FontAwesome from 'react-fontawesome';
import { youtubeIdExtractor } from '../../util/video_util';

export default class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.channel;

    this.clearErrors = this.clearErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleChannel(this.props.match.params.channelId);
  }

  handleSubmit(e) {
    event.preventDefault();
    this.props.clearErrors();
    this.props.customizeChannel(this.state).then(this.props.modalRequestClose);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  clearErrors() {
    return () => {
      this.props.clearErrors();
    };
  }

  render() {

    let videoThumbnailUrlId = youtubeIdExtractor(this.state.video_url);

    let videoThumbnailUrl = videoThumbnailUrlId ? `https://img.youtube.com/vi/${youtubeIdExtractor(this.state.video_url)}/maxresdefault.jpg` : "";

    if (!this.state) {
      this.state = this.props.channel;
    }

    if (this.state) {
      return (
        <section className='customize-form-container'>
          <div id='close-form'>
            <button onClick={this.props.modalRequestClose}>
              <FontAwesome name='window-close' size='4x' id='form-close'/>
            </button>
          </div>
          <header className='customize-title-errors'>
            <h1>Customize Channel</h1>

            <div className="errors">
              {this.renderErrors()}
            </div>
          </header>
          <section className='customize-form'>
            <div className='left-form'>

              <div id='text-form'>
                <label>Channel Name
                <input type="text"
                  id="channel-name-box"
                  value={this.state.channel_name}
                  onChange={this.update('channel_name')}
                  className="customize-form-input"
                  maxLength="20"
                  />
                </label>

                <label>Stream Title
                <input type="text"
                  id="stream-title-box"
                  value={this.state.stream_name}
                  onChange={this.update('stream_name')}
                  className="customize-form-input"
                  maxLength="48"
                  />
                </label>

                <label><h3>Stream Description</h3>
                <textarea
                  id="stream-description-box"
                  onChange={this.update('stream_description')}
                  className="customize-form-input"
                  maxLength="200"
                  >{this.state.stream_description}</textarea>
                </label>
              </div>

              <div id='video-form'>
                <label>YouTube Video URL
                <input type="text"
                  id="stream-video-box"
                  value={this.state.video_url ? this.state.video_url : ""}
                  onChange={this.update('video_url')}
                  className="customize-form-input"
                  />
                </label>

                <div id='embedded-video-image'>
                  <img
                    src={videoThumbnailUrl}
                    />
                </div>
              </div>

            </div>
            <div className='right-form'>

              <div id='image-form'>
                <label htmlFor="profile-image-box">Profile Image
                  <input type="text"
                    id="profile-image-box"
                    value={this.state.profile_image_url}
                    onChange={this.update('profile_image_url')}
                    className="customize-form-input"
                    />
                </label>
                <img src={this.state.profile_image_url} />
              </div>

              <div id='banner-form'>
                <label htmlFor="banner-image-box">Banner Image
                  <input type="text"
                    id="banner-image-box"
                    value={this.state.banner_image_url}
                    onChange={this.update('banner_image_url')}
                    className="customize-form-input"
                    />
                </label>
                <img src={this.state.banner_image_url} />
              </div>

            </div>
          </section>
          <div className='customize-submit-cancel'>
            <button onClick={this.handleSubmit} id='submit-form'>Update Channel</button>
            <button onClick={this.props.modalRequestClose} id='cancel-form'>Cancel</button>
          </div>
        </section>
      );
    } else {
      return (<h1>Fetching data</h1>);
    }

  }
}
