import React from 'react';
import FollowButtonContainer from './follow_button_container';

class FollowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.username);
  }

  render() {
    return (
      <div className="follow-item">
        <div className="follow-profile">
          <div className="follow-avatar">
            <a href={`/#/${this.props.username}` }>
              <img src={this.props.avatarUrl}/>
            </a>
          </div>
          <div className="follow-name">
            <div className="follow-username">{this.props.username}</div>
            {
              this.props.realname ?
              <div>{this.props.realname}</div> : null
            }
          </div>
        </div>
        {
          this.props.currentUser !== this.props.username ?
          <FollowButtonContainer pageOwner={this.props.username}
            followed_by_current_user={this.props.followed}/> : null
        }
      </div>
    );
  }
}

export default FollowItem;
