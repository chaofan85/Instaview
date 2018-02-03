import React from 'react';
import FollowItemContainer from './follow_item_container';

class Follow extends React.Component {

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
    const follows = this.props.follows;
    let followerList = follows.length ?
      follows.map(follow => {
        return (
          <FollowItemContainer username={follow.name}
            realname={follow.real_name}
            avatarUrl={follow.avatar_url}
            followed={follow.followed_by_current_user}
            pageOwner={this.props.pageOwner}
            key={follow.id}
            action={this.closeModal}/>
        );
      }) : null;

    return (
      <div className="followers-open">
        <div className="followers" onClick={this.openModal}><span>
          {this.props.follows.length}
        </span>{this.props.type}</div>

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

export default Follow;
