import React from 'react';
import UserPhotoIndexItem from './user_photo_index_item';

const UserPhotoIndex = ({ user, photos }) => {
  const photosArray = Object.values(photos).sort((a, b) => {
    return Date.parse(b.created_at) - Date.parse(a.created_at);
  });

  const userPhotos = photosArray.map(photo => {
    return (<UserPhotoIndexItem photo={photo}
      photoId={photo.photoId}
      key={photo.photoId}/>);
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
