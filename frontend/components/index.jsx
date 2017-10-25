import React from 'react';
import SessionFormContainer from './session/session_form_container';

class Index extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <p>Greeting, {this.props.currentUser.username}</p>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="index-main">
          <div className='index-background'></div>
          <SessionFormContainer />
        </div>
      );
    }
  }
}

export default Index;
