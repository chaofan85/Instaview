import React from 'react';
import UserPhotoIndexItem from './user_photo_index_item';

const UserPhotoIndex = ({ user, photos }) => {
  const photosArray = Object.values(photos);
  const userPhotos = photosArray.map(photo => {
    return (<UserPhotoIndexItem photo={photo} key={photo.photoId}/>);
  });
  return (
    <section className="user-gallery">
      <ul>
        { userPhotos }
      </ul>
    </section>
  );
};

export default UserPhotoIndex;
