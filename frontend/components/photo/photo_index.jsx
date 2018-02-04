import React from 'react';
import PhotoUpload from './upload/photo_upload';
import FeedIndexContainer from './feed/feed_index_container';

const PhotoIndex = () => {
  return (
    <div className='photo-index'>
      <PhotoUpload />
      <FeedIndexContainer />
    </div>
  );
};

export default PhotoIndex;
