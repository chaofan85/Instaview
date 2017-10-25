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
        <div>
          <LoginFormContainer />
          <a onClick={this.handleChange}>clickme</a>
        </div>
      );
    } else {
      return (
        <div>
          <SignupFormContainer />
          <a onClick={this.handleChange}>clickme</a>
        </div>
      );
    }
  }
}

export default Index;
