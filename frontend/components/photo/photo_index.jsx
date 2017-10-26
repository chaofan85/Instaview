import React from 'react';
import PhotoUpload from './photo_upload';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='photo-index'>
        <PhotoUpload />
        <div className='feed-index'>
        </div>
      </div>
    );
  }
}

export default PhotoIndex;
