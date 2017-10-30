import React from 'react';
import Header from '../header';
import UserPhotoIndex from './user_photo_index';
import UserAvatar from './user_avatar';
import { Link } from 'react-router-dom';


class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderOptions: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderOptions: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderOptions: false });
    document.body.style.overflow = 'visible';
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchUserInfo(this.props.currentUser.id);
    }
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
                  {
                    this.props.currentUser ?
                    this.props.currentUser.username : null
                  }
                </span>
                <span className="edit-profile">Edit Profile</span>

                <span className="setting-options"
                  onClick={this.openModal}></span>

                {
                  this.state.renderOptions ?
                  <div className='user-info-edit'>
                    <div className='modal-form'>
                      <ul className='modal-options'>
                        <li>
                          <button onClick={this.props.logout}>Log Out</button>
                        </li>
                        <li>
                          <Link to='/'>
                            <button onClick={this.closeModal}>Cancel</button>
                          </Link>
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
