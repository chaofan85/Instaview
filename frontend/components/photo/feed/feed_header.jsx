import React from 'react';

const FeedHeader = ({ location, username }) => {
  return (
    <div className='feed-header'>
      <div className='feed-user-avatar'></div>
      <div className="feed-user-info">
        <div className='feed-username'>{ username }</div>
        { location ?
          <div className="feed-location">{location}</div>
            :
          null }
      </div>
    </div>
  );
};

export default FeedHeader;
