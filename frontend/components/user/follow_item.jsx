import React from 'react';
import FollowButtonContainer from './follow_button_container';

class FollowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="follow-item">
        <div><img src={this.props.avatarUrl}/></div>
        <div>{this.props.username}</div>
        <FollowButtonContainer pageOwner={this.props.pageOwner}
          followed_by_current_user={this.props.followed}/>
      </div>
    );
  }
}

export default FollowItem;
