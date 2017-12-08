import React from 'react';

class PhotoShowFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  render() {
    const photo = this.props.photo[this.props.photoId];
    return photo ?
    (
      <div className="photo-frame">
        <div className="single-photo">
          <img src={`${photo.image_url}`} />
        </div>
        <div className="single-photo-info"></div>
      </div>
    ) : null;
  }
}

export default PhotoShowFrame;
