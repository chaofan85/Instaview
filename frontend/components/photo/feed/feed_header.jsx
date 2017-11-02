import React from 'react';
import { Link } from 'react-router-dom';

const FeedHeader = ({ location, username, userAvatar }) => {
  return (
    <div className='feed-header'>
      <Link to={`/${username}`} >
        <div className='feed-user-avatar'>
          <img src={`${userAvatar}`} />
        </div>
      </Link>
      <div className="feed-user-info">
        <Link to={`/${username}` }>
          <div className='feed-username'>{ username }</div>
        </Link>
        { location ?
          <div className="feed-location">{location}</div>
            :
          null }
      </div>
    </div>
  );
};

export default FeedHeader;
