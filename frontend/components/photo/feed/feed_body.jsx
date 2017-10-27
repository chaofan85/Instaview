import React from 'react';

const FeedBody = ({ imageUrl }) => {
  return (
    <div className='feed-body'>
      <img src={`${imageUrl}`} />
    </div>
  );
};

export default FeedBody;
