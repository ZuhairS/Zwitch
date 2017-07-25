import React from 'react';
import merge from 'lodash/merge';

export default class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel: props.channel,
      errors: props.errors
    };

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
      this.state = {
        channel: this.props.channel,
        errors: this.props.errors
      };
    }

    if (this.state) {
      return (
        <section className='customize-form-container'>
          <aside id='close-form'></aside>
          <header className='customize-title-errors'>
            <h1>Customize Channel</h1>

            <div className="errors">
              {this.renderErrors()}
            </div>
          </header>
          <section className='customize-form'>
            <div className='left-form'>

              <div id='text-form'></div>

              <div id='video-form'></div>

            </div>
            <div className='right-form'>

              <div id='image-form'></div>

              <div id='banner-form'></div>

            </div>
          </section>
          <div className='customize-submit-cancel'>

          </div>
        </section>
      );
    } else {
      return (<h1>Fetching data</h1>);
    }

  }
}
