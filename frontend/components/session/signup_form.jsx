import React from 'react';
// import LoginFormContainer from './login_form_container';
import ErrorItem from '../other/error_item.jsx';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userInfo;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
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
      <div className='signup-form'>
        <div className='session-errors'>
          { errors }
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.email}
            placeholder='Email'
            onChange={this.handleChange('email')}></input>
          <br />
          <input type='text'
            value={this.state.fullname}
            placeholder='Full Name&nbsp;(Optional)'
            onChange={this.handleChange('fullname')}></input>
          <br />
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
          <button className='signup-button'>Sign Up</button>
          <p className='polocy'>
            By signing up, you agree to our Terms & Privacy Policy.
          </p>
        </form>
        <div>

        <div className="or">
          <div className="line"></div>
          <div className="or-text">OR</div>
          <div className="line"></div>
        </div>
        <button className="guest-button" onClick={this.guestLogin}>
          Login as Guest
        </button>

        </div>
      </div>
    );
  }
}

export default SignupForm;
