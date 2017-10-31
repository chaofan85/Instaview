import React from 'react';
import HeaderContainer from '../header_container';
import UserPhotoIndex from './user_photo_index';
import UserAvatar from './user_avatar';
import { Link, withRouter } from 'react-router-dom';
import EditOrFollowContainer from './edit_or_follow_container';


class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderOptions: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  openModal() {
    this.setState({ renderOptions: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderOptions: false });
    document.body.style.overflow = 'visible';
  }

  userLogout() {
    this.closeModal();
    this.props.logout();
    this.props.history.push("/");

  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.match.params.username);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.username !== this.props.match.params.username) {
      this.props.fetchUserInfo(nextProps.match.params.username);
    }

  }

  render() {
    if (this.props.user) {

      return (
        <div className='profile-page'>
          <HeaderContainer />

          <article className="profile-main">

            <section className="profile-header">

              <UserAvatar />

              <div className="user-profile-info">
                <div className="user-profile-info-1">
                  <span className="user-profile-username">
                    {
                      this.props.user ?
                      this.props.user.username : null
                    }
                  </span>
                  
                  <EditOrFollowContainer pageOwner={this.props.pageOwner}/>

                  <span className="setting-options"
                    onClick={this.openModal}></span>

                  {
                    this.state.renderOptions ?
                    <div className='user-info-edit'>
                      <div className='modal-form'>
                        <ul className='modal-options'>
                          <li>
                            <button onClick={this.userLogout}>Log Out</button>
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
    } else {
      return null;
    }
  }
}

export default withRouter(ProfileIndex);
