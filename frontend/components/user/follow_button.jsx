import React from "react";

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderConfirm: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  openModal() {
    this.setState({ renderConfirm: true });
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    this.setState({ renderConfirm: false });
    document.body.style.overflow = "visible";
  }

  follow() {
    const followeeId = this.props.user.id;
    this.props.followUser(followeeId);
  }

  unfollow() {
    const followeeId = this.props.user.id;
    this.props.unFollowUser(followeeId).then(() => {
      this.closeModal();
    });
  }

  render() {
    console.log(this.props.user);
    if (this.props.user) {
      if (this.props.user.followed_by_current_user) {
        return (
          <div className="unfollow-user-container">
            <span className="unfollow-user" onClick={this.openModal}>
              Following
            </span>

            {this.state.renderConfirm ? (
              <div className="modal-panel">
                <div className="modal-form">
                  <div className="confirm-info">
                    <div className="following-avatar">
                      <img src={this.props.user.avatar_url} />
                      <div className="unfollow-confirm">
                        Unfollow {this.props.user.username}?
                      </div>
                    </div>
                  </div>
                  <div className="unfollow-button" onClick={this.unfollow}>Unfollow</div>
                  <div className="unfollow-cancel">Cancel</div>
                  <span className="modal-close" onClick={this.closeModal}>
                    &times;
                  </span>
                </div>
                <div className="modal-bg" />
              </div>
            ) : null}
          </div>
        );
      } else {
        return (
          <span className="follow-user" onClick={this.follow}>
            Follow
          </span>
        );
      }
    } else {
      return null;
    }
  }
}

export default FollowButton;
