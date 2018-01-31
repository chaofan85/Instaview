import React from 'react';
import FollowButtonContainer from './follow_button_container';

const FollowItem = ({ username, realname, avatarUrl, followed, pageOwner }) => {
  return (
    <div className="follow-item">
      <div><img src={avatarUrl}/></div>
      <div>{username}</div>
      <FollowButtonContainer pageOwner={pageOwner}
        followed_by_current_user={followed}/>
    </div>
  );
};

export default FollowItem;
