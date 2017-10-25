import React from 'react';
import PhotoUpload from './photo_upload';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderUpload: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ renderUpload: !this.state.renderUpload });
  }

  render() {
    return (
      <div className='photo-index'>
        <button onClick={this.handleClick}>+ New Photo</button>
        {this.state.renderUpload ? <PhotoUpload /> : <div></div>}
        {/*<PhotoFeed />*/}
      </div>
    );
  }
}

export default PhotoIndex;
