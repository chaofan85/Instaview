import React from 'react';
import HeaderContainer from '../../header_container';
import PhotoShowFrameContainer from './photo_show_frame_container';

class PhotoShow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed-showpage">
        <HeaderContainer />
<<<<<<< HEAD
        <div className="showpage-main">lalala</div>
    
=======
        <div className="showpage-main">
          <PhotoShowFrameContainer photoId={this.props.photoId}/>
        </div>

>>>>>>> showpage
      </div>
    );
  }
}

export default PhotoShow;
