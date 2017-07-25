import React from 'react';
import merge from 'lodash/merge';

export default class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.postId;
    this.state = props.channels[this.id];
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    event.preventDefault();
    this.props.clearErrors();
    this.props.customizeChannel(this.state)
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

    return (

    );
  }
}
