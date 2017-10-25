import React from 'react';
import SessionForm from './session/session_form';
import PhotoIndexContainer from './photo/photo_index_container';
import Header from './header';

class Index extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          {/* <button onClick={this.props.logout}>Logout</button> */}
          {/*<PhotoIndexContainer />*/}
          <Header />
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
