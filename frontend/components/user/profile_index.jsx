import React from 'react';
import Header from '../header';
import UserPhotoIndex from './user_photo_index';
// import UserAvatarContainer from './user_avatar_container';


class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderEdit: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderEdit: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderEdit: false });
    document.body.style.overflow = 'visible';
  }


  componentDidMount() {
    this.props.fetchUserInfo(this.props.currentUser.id);
  }

  render() {
    console.log(this.props);
    return (
      <div className='profile-page'>
        <Header currentUser={this.props.currentUser}/>

        <article className="profile-main">

          <section className="profile-header">
          
            <div className="user-profile-avatar" onClick={this.openModal}></div>

            {
              this.state.renderEdit ?
              <div className='user-info-edit'>
                <div className='modal-form'>
                  <ul className='modal-options'>
                    <li>
                      <button onClick={this.removeComment}>Remove Current Photo</button>
                    </li>
                    <li>
                      <button>Upload Photo</button>
                    </li>
                    <li>
                      <button onClick={this.closeModal}>Cancel</button>
                    </li>
                  </ul>
                  <span className="modal-close"
                    onClick={this.closeModal}>&times;</span>
                </div>
                <div className="modal-bg"></div>
              </div>
              :
              null
            }

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
