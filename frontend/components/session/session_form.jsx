import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderLogin: props.renderLogin };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ renderLogin: !this.state.renderLogin });
  }

  render() {
    if (this.state.renderLogin) {
      return (
        <div className='login-container'>
          <h2>Instaview</h2>
          <LoginFormContainer />
          <p>
            Dont't have an account?
            <a onClick={this.handleChange}>Sign up</a>
          </p>
        </div>
      );
    } else {
      return (
        <div className='signup-container'>
          <h2>Instaview</h2>
          <p className='slogan'>
            Sign up to see photos and videos from your friends.
          </p>
          <SignupFormContainer />
          <p>
            Have an account?
            <a onClick={this.handleChange}>Log in</a>
          </p>
        </div>
      );
    }
  }
}

export default Index;
