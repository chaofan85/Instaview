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
            <div className="user-profile-info">
              <div className="user-profile-info-1">
                <span className="user-profile-username">
                  {this.props.currentUser.username}
                </span>
                <span className="edit-profile">Edit Profile</span>
                <span className="setting-options"></span>
              </div>
              <ul className="user-profile-info-2">
                <li>xxx posts</li>
                <li>xxx followers</li>
                <li>xxx following</li>
              </ul>
              <div className="user-profile-info-3">
                <span></span>
              </div>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

export default ProfileIndex;
