import React from 'react';
import PhotoShowFrameContainer from '../photo/show/photo_show_frame_container';

class UserPhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderOptions: false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ renderOptions: true });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ renderOptions: false });
    document.body.style.overflow = 'visible';
  }

  render() {
    return (
      <div className="photo-item">
        <div className="photo-item-image" style={{backgroundImage: `url(${this.props.photo.image_url})`}} onClick={this.openModal} />

          {
            this.state.renderOptions ?
            <div className='confirmation'>
              <div className='modal-form'>
                <PhotoShowFrameContainer
                  photo={this.props.photo}
                  photoId={this.props.photoId} />
                <span className="modal-close"
                  onClick={this.closeModal}>&times;</span>
              </div>
              <div className="modal-bg"></div>
            </div>
            :
            null
          }
      </div>
    );
  }
}

export default UserPhotoIndexItem;
