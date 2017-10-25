import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

class Index extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = props.renderLogin
  // }




  render() {
    console.log(this.props);
    if (this.props.currentUser) {
      return (
        <div>
          Greeting, {this.props.currentUser.username}
        </div>
      );
    } else {
      if (this.props.something) {
        return (
          <div>
            <SignupFormContainer />
            <a onClick={this.props.renderLoginForm(this.props.renderLogin)}>clickme</a>
          </div>
        );
      } else {
        return (
          <div>
            <LoginFormContainer />
            <button onClick={this.props.renderLoginForm(this.props.renderLogin)}>clickme</button>
          </div>
        );
      }
    }
  }
}

export default Index;
