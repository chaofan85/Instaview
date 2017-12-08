import React from 'react';

class PhotoShowFrame extends React.Component {
  constructor(props) {
    super(props);
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
