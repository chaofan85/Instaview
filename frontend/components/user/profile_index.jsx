import React from 'react';
import HeaderContainer from '../header_container';
import UserPhotoIndex from './user_photo_index';
import UserAvatarContainer from './user_avatar_container';
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

              <UserAvatarContainer pageOwner={this.props.pageOwner} />

              <div className="user-profile-info">
                <div className="user-profile-info-1">
                  <span className="user-profile-username">
                    {
                      this.props.user ?
                      this.props.user.username : null
                    }
                  </span>

                  <EditOrFollowContainer pageOwner={this.props.pageOwner}/>

                  {
                    this.props.currentUser.username === this.props.pageOwner ?
                    <span className="setting-options"
                      onClick={this.openModal}></span>
                    :
                    null
                  }

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
                  <li>
                    <span>{this.props.user.post_number}</span>
                    {
                      this.props.user.post_number > 1 ?
                      " posts" : " post"
                    }
                  </li>
                  <li>
                    <span>{this.props.user.follower_num}</span>
                    {
                      this.props.user.follower_num > 1 ?
                      " followers" : " follower"
                    }
                  </li>
                  <li>
                    <span>{this.props.user.following_num}</span> following
                  </li>
                </ul>

                <div className="user-profile-info-3">
                  <span></span>
                </div>
              </div>
            </section>

            {
              this.props.user.photos ?
              <UserPhotoIndex  user={this.props.user}/>
              :
              <div className="no-post">No posts yet</div>
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
