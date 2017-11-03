import React from 'react';
import ErrorItem from '../other/error_item.jsx';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userInfo;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  guestLogin() {
    const guest = {
      username: "guest",
      password: "iamguest",
    };
    this.props.login(guest);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const errors = this.props.errors.map((error, idx) => {
        return (
          <ErrorItem error={error} key={idx} />
        );
      });

    return (
      <div className='login-form'>
        <div className='session-errors'>
          { errors }
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.username}
            placeholder='Username'
            onChange={this.handleChange('username')}></input>
          <br />
          <input type='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.handleChange('password')}></input>
          <br />
          <button className='login-button'>Log In</button>
          <p className='forgot'>Forgot password?</p>
        </form>
        <div className="or">
          <div className="line"></div>
          <div className="or-text">OR</div>
          <div className="line"></div>
        </div>
        <button className="guest-button" onClick={this.guestLogin}>
          Login as Guest
        </button>
      </div>
    );
  }
}

export default LoginForm;
