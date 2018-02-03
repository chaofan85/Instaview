import React from 'react';
import { Link } from 'react-router-dom';
import FollowButtonContainer from './follow_button_container';

class FollowItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.username);
  }

  redirect() {
    location.reload();
    const username = this.props.username;
    setTimeout(function(){
      console.log(username);
      window.location.replace(`/#/${username}`);
    }, 10);

  }

  render() {
    return (
      <div className="follow-item">
        <div className="follow-profile">
          <div className="follow-avatar"
            onClick={this.redirect}>
            <img src={this.props.avatarUrl}/>
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
