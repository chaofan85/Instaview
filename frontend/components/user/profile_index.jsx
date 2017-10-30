import React from 'react';
import Header from '../header';
import UserPhotoIndex from './user_photo_index';
import UserAvatar from './user_avatar';


class ProfileIndex extends React.Component {

  componentDidMount() {
    this.props.fetchUserInfo(this.props.currentUser.id);
  }

  render() {
    return (
      <div className='profile-page'>
        <Header currentUser={this.props.currentUser}/>

        <article className="profile-main">

          <section className="profile-header">

            <UserAvatar />

            <div className="user-profile-info">
              <div className="user-profile-info-1">
                <span className="user-profile-username">
                  {this.props.currentUser.username}
                </span>
                <span className="edit-profile">Edit Profile</span>
                <span className="setting-options"></span>
              </div>
              <ul className="user-profile-info-2">
                <li>{this.props.user.post_number} posts</li>
                <li>xxx followers</li>
                <li>xxx following</li>
              </ul>
              <div className="user-profile-info-3">
                <span></span>
              </div>
            </div>
          </section>

          {
            this.props.user.photos ?
            <UserPhotoIndex  user={this.props.user}/> : null
          }
        </article>
      </div>
    );
  }
}

export default ProfileIndex;
