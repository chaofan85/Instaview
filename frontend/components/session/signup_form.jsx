import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input type='text'
          value={this.state.email}
          placeholder='Email'
          onChange={this.handleChange('email')}></input>
        <input type='text'
          value={this.state.fullname}
          placeholder='Full Name(Optional)'
          onChange={this.handleChange('fullname')}></input>
        <input type='text'
          value={this.state.username}
          placeholder='Username'
          onChange={this.handleChange('username')}></input>
        <input type='password'
          value={this.state.password}
          placeholder='Password'
          onChange={this.handleChange('password')}></input>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default SignupForm;
