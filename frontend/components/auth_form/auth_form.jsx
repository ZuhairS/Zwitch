import React from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.modalIsOpen = this.modalIsOpen.bind(this);
    this.modalRequestClose = this.modalRequestClose.bind(this);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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

  submitType() {
    return this.props.formType === 'login' ? "Log In" : "Sign Up";
  }

  guestLogin(event) {
    event.preventDefault();
    const guestUser = {
      username: "Guest",
      password: "guestpassword"
    };
    this.props.guestLogin(guestUser);
    this.props.clearErrors();
  }

  modalIsOpen() {
    return ["login", "signup"].includes(this.props.formType);
  }

  modalRequestClose() {
    this.props.clearErrors();
    this.modalIsOpen = false;
    this.props.history.replace('/');
  }

  render() {

    return (
      <Modal isOpen={Boolean(this.modalIsOpen)}
        onRequestClose={this.modalRequestClose}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Sign Up/Log In Modal">

        <div className="auth-form-container">

          <div className="login-signup-selector">
            <NavLink onClick={this.clearErrors()} to="/login">
              <h3>Log In</h3>
            </NavLink>
            <NavLink onClick={this.clearErrors()} to="/signup">
              <h3>Sign Up</h3>
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="form-box">

            <div className="errors">
              {this.renderErrors()}
            </div>

            <div className="auth-form">

              <label htmlFor="username-box">Username</label>
              <input type="text"
                id="username-box"
                value={this.state.username}
                onChange={this.update('username')}
                className="form-input"
                />

              <label htmlFor="password-box">Password</label>
              <input type="password"
                id="password-box"
                value={this.state.password}
                onChange={this.update('password')}
                className="form-input"
                />
            </div>

            <div className="auth-buttons">
              <input type="submit" value={this.submitType()} />
              <button onClick={this.guestLogin}>Guest Login</button>
            </div>

          </form>
        </div>
      </Modal>
    );

  }
}

export default AuthForm;
