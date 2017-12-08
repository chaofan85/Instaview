import React from 'react';

class PhotoShowFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  render() {
    console.log(this.props);
    return (
      <div className="photo-frame">
        <div className="single-photo">

        </div>
        <div className="single-photo-info"></div>
      </div>
    );
  }
}

export default PhotoShowFrame;
