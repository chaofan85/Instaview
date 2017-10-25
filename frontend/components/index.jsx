import React from 'react';
import SessionForm from './session/session_form';

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
          <SessionForm />
        </div>
      );
    }
  }
}

export default Index;
