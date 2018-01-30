import React from 'react';
import { Link } from 'react-router-dom';

const FeedHeader = ({ location, username, userAvatar }) => {
  return (
    <div className='feed-header'>
      <a href={`/#/${username}` }>
        <div className='feed-user-avatar'>
          <img src={`${userAvatar}`} />
        </div>
      </a>
      <div className="feed-user-info">
        <a href={`/#/${username}` }>
          <div className='feed-username'>{ username }</div>
        </a>
        { location ?
          <div className="feed-location">{location}</div> : null }
      </div>
    </div>
  );
};

export default FeedHeader;
