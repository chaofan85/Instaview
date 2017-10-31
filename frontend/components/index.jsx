import React from 'react';
import SessionForm from './session/session_form';
import PhotoIndex from './photo/photo_index';
import Header from './header';

class Index extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div className='main'>

          <Header logout={this.props.logout}
            currentUser={this.props.currentUser}/>
          <PhotoIndex />
        </div>
      );
    } else {
      return (
        <div className="index-main">
          <div className='index-background'>
            <img src={"photo-189349.jpeg"} />
          </div>
          <SessionForm />
        </div>
      );
    }
  }
}

export default Index;
