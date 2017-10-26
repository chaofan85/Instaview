import React from 'react';
import PhotoUpload from './photo_upload';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { renderUpload: false };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className='photo-index'>
        <div className='photo-upload'>
          <PhotoUpload />
        </div>
        <div className='feed-index'>
        </div>
      </div>
    );
  }
}

export default PhotoIndex;
