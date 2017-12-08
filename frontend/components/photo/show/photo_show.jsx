import React from 'react';
import HeaderContainer from '../../header_container';

class photoShow extends React.Component {

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
        <div className="showpage-main">lalala</div>
      </div>
    );
  }
}

export default photoShow;
