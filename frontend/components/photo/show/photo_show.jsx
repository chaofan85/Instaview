import React from 'react';
import HeaderContainer from '../../header_container';
import PhotoShowFrame from './photo_show_frame';

class PhotoShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchPhoto(this.props.photoId);
  }

  render() {
    return (
      <div className="feed-showpage">
        <HeaderContainer />
        <div className="showpage-main">
          <PhotoShowFrame />
        </div>

      </div>
    );
  }
}

export default PhotoShow;
