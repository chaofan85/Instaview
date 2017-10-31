import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      followee_id: this.props.user.id
    };

    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  follow() {
    const follow = Object.assign({}, this.state);
    this.props.followUser(follow);
  }

  unfollow() {
    const followId = this.props.user.follow_id;
    this.props.unFollowUser(followId);
  }

  render() {
    console.log(this.props);
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
  }
}

export default FollowButton;
