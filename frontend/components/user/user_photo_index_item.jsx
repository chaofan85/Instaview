import React from 'react';

class UserPhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="photo-item">
        <img src={`${this.props.photo.image_url}`} />
      </div>
    );
  }
}

export default UserPhotoIndexItem;
