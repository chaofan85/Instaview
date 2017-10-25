import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

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
    if (this.props.currentUser) {
      return (
        <div>
          <p>Greeting, {this.props.currentUser.username}</p>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
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
}

export default Index;
