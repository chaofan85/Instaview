import React from 'react';
import PhotoUploadPanel from './photo_upload_panel';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderUpload: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderUpload: true });
  }

  closeModal() {
    this.setState({ renderUpload: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>+ New Photo</button>
        { this.state.renderUpload ? (
          <div className='upload-panel'>
            <div className='modal-form'>
              <span className="modal-close"
                onClick={this.closeModal}>&times;</span>
              <PhotoUploadPanel />
            </div>
            <div className="modal-bg"></div>
          </div>) : null }
      </div>
    );
  }
}

export default PhotoUpload;
