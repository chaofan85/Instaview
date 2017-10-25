import React from 'react';
import SessionForm from './session/session_form';
import PhotoIndex from './photo/photo_index';
import Header from './header';

class Index extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div className='main'>
          {/* <button onClick={this.props.logout}>Logout</button> */}
          <Header />
          <PhotoIndex />
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
