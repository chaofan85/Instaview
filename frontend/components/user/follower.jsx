import React from 'react';
import FollowItem from './follow_item';

class Follower extends React.Component {

  constructor(props) {
    super(props);
    this.state = { renderUpload: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderUpload: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderUpload: false });
    document.body.style.overflow = 'visible';
  }

  render() {
    const followers = this.props.followers;
    console.log(followers);
    let followerList = followers.length ?
      followers.map(follower => {
        return (
          <FollowItem username={follower.name}
            realname={follower.real_name}
            avatarUrl={follower.avatar_url}
            followed={follower.followed_by_current_user}
            key={follower.id} />
        );
      }) : null;

    return (
      <div className="followers-open">
        <div className="followers" onClick={this.openModal}><span>
          {this.props.followers.length}
        </span>followers</div>

        { this.state.renderUpload ? (
          <div className='modal-panel'>
            <div className='modal-form'>
              <div className="follower-list-title">Followers</div>
              <ul className="follower-list">
                { followerList }
              </ul>
              <span className="modal-close"
                onClick={this.closeModal}>&times;</span>
            </div>
            <div className="modal-bg"></div>
          </div>) : null }
      </div>
    );
  }

}

export default Follower;
