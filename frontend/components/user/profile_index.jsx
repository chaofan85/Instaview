import React from 'react';
import Header from '../header';

class ProfileIndex extends React.Component {

  render() {
    return (
      <div className='profile-page'>
        <Header currentUser={this.props.currentUser}/>

        <article className="profile-main">
          <section className="profile-header">
            <div className="user-profile-avatar"></div>
            <div className="user-profile-info"></div>
          </section>
        </article>
      </div>
    );
  }
}

export default ProfileIndex;
