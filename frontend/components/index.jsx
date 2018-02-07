import React from 'react';
import SessionForm from './session/session_form';
import PhotoIndex from './photo/photo_index';
import HeaderContainer from './header_container';

class Index extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div className='main'>
          <HeaderContainer />
          <PhotoIndex />
        </div>
      );
    } else {
      return (
        <div className="index-main">
          <div className='index-background'>
            <img src={`${window.photo1}`} />
            <img src={`${window.photo2}`} />
            <img src={`${window.photo3}`} />
            <img src={`${window.photo4}`} />
            <img src={`${window.photo5}`} />
            <img className="dog-pic" src={`${window.photo6}`} />
          </div>
          <SessionForm />
        </div>
      );
    }
  }
}

export default Index;
