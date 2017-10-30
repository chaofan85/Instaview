import React from 'react';

const UserPhotoIndexItem = ({ photo }) => {
  console.log(photo);
  return (
    <div className="photo-item">
      <img src={`${photo.image_url}`} />
    </div>
  );
};

export default UserPhotoIndexItem;
