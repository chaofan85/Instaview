import React from 'react';

const FollowItem = ({ username, realname, avatarUrl, followed }) => {
  return (
    <div className="follow-item">
      <div><img src={avatarUrl}/></div>
      <div>{username}</div>
      
    </div>
  );
};

export default FollowItem;
