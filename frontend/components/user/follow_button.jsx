import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow() {
    const followeeId = this.props.user.id;
    this.props.followUser(followeeId);
  }

  unfollow() {
    const followeeId = this.props.user.id;
    this.props.unFollowUser(followeeId);
  }

  render() {
    if(this.props.user) {
      if (this.props.user.followed_by_current_user) {
        return (
          <span className="unfollow-user"
            onClick={this.unfollow}>Following</span>
        );
      } else {
        return (
          <span className="follow-user"
            onClick={this.follow}>Follow</span>
        );
      }
    } else {return null;}
  }
}

export default FollowButton;
