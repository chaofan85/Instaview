import React from 'react';

const FeedHeader = (location) => {
  return (
    <div className='feed-header'>
      <div className='feed-user-avatar'></div>
      <div className='feed-username'></div>
      { location ? <div>{location}</div> : null }
    </div>
  );
};

export default FeedHeader;
