import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = { 
      name: this.state.name, 
      email: this.state.email, 
      password: this.state.password }

    this.props.processForm(user);
  }

  handleDemo() {
    let demo = {
      email: "Morpheus@gmail.com",
      password: "hello123"
    }

    this.props.processDemo(demo);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-container">
        {this.renderErrors()}
        <div className="session-form">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="session-title">{this.props.formType}</div>
            <div>{this.props.formType === "Sign up" ? 
            (<div>Already a member? <Link className="session-link" to={'/login'}>Log In!</Link></div>) : 
            (<div>Need an account? <Link className="session-link" to={'/signup'}>Sign Up!</Link></div>)}</div>
            { 
            this.props.formType === "Sign up" ?
                <label className="session-label">Your name
                <input className="session-text-input" type="text"
                value={this.state.name}
                onChange={this.update('name')}
                />
                </label>
              : null 
              }
            <label className="session-label"> Email address
              <input className="session-text-input" type="email"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <label className="session-label"> Password
              <input className="session-text-input" type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <input className="session-submit" type="submit" value="Continue" />
          <div className="session-submit-disclosure">
            When you "Continue" or "Demo Login", you agree to Meetin's Terms of Service. 
            We will manage information about you as described in our 
            Privacy Policy, and Cookie Policy.
          </div>
          </form>
            <button className="session-submit demo" onClick={() => { this.handleDemo() }}>Demo Login</button>
          </div>
        </div>
    );
  }
}

export default withRouter(LoginForm);