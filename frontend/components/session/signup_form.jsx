import React from 'react';
import LoginFormContainer from './login_form_container';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userInfo;

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {

    return (
      <div className='signup-form'>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.email}
            placeholder='Email'
            onChange={this.handleChange('email')}></input>
          <br />
          <input type='text'
            value={this.state.fullname}
            placeholder='Full Name(Optional)'
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

        </div>
      </div>
    );
  }
}

export default SignupForm;
