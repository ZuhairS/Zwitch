import React from 'react';
import merge from 'lodash/merge';
import FontAwesome from 'react-fontawesome';

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
    this.props.customizeChannel(this.state);
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

    if (!this.state) {
      this.state = this.props.channel;
    }

    if (this.state) {
      return (
        <section className='customize-form-container'>
          <div id='close-form'>
            <button onClick={this.props.modalRequestClose}>
              <FontAwesome name='window-close' size='2x' id='form-close'/>
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
                <label htmlFor="channel-name-box">Channel Name</label>
                <input type="text"
                  id="channel-name-box"
                  value={this.state.channel_name}
                  onChange={this.update('channel_name')}
                  className="customize-form-input"
                  maxLength="20"
                  />

                <label htmlFor="stream-title-box">Stream Title</label>
                <input type="text"
                  id="stream-title-box"
                  value={this.state.stream_name}
                  onChange={this.update('stream_name')}
                  className="customize-form-input"
                  maxLength="48"
                  />

                <label htmlFor="stream-description-box">Stream Description</label>
                <input type="text"
                  id="stream-description-box"
                  value={this.state.stream_description}
                  onChange={this.update('stream_description')}
                  className="customize-form-input"
                  maxLength="200"
                  />
              </div>

              <div id='video-form'>
                <label htmlFor="stream-video-box">Stream Description</label>
                <input type="text"
                  id="stream-video-box"
                  value={this.state.stream_description}
                  onChange={this.update('video_url')}
                  className="customize-form-input"
                  maxLength="200"
                  />

                <div id='embedded-video'></div>
              </div>

            </div>
            <div className='right-form'>

              <div id='image-form'>
                <label htmlFor="profile-image-box">Profile Image</label>
              </div>

              <div id='banner-form'>
                <label htmlFor="banner-image-box">Banner Image</label>
              </div>

            </div>
          </section>
          <div className='customize-submit-cancel'>
            <button id='submit-form'></button>
            <button id='cancel-form'></button>
          </div>
        </section>
      );
    } else {
      return (<h1>Fetching data</h1>);
    }

  }
}
