import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
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

  submitType() {
    return this.props.formType === 'login' ? "Login" : "Sign Up";
  }

  demoLogin(event) {
    event.preventDefault();
  }

  render() {

    return (
      <div className="auth-form">

        <div className="login-signup-selector">
          <NavLink to="/login"><h3>Log In</h3></NavLink>
          <NavLink to="/signup"><h3>Sign Up</h3></NavLink>
        </div>

        <form onSubmit={this.handleSubmit} className="form-box">

          {this.renderErrors()}

          <div className="login-form">

            <br/>

            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="form-input"
                />
            </label>

            <br/>

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="form-input"
                />
            </label>

            <br/>

            <input type="submit" value={this.submitType()} />

            <button onClick={this.demoLogin}>Demo Login</button>
          </div>
        </form>
      </div>
    );

  }
}
