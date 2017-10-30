import React from 'react';
import UserPhotoIndexItem from './user_photo_index_item';

const UserPhotoIndex = ({ user }) => {
  const photosArray = Object.values(user.photos);
  const photos = photosArray.map(photo => {
    return (<UserPhotoIndexItem photo={photo} key={photo.photoId}/>);
  });
  return (

    <section className="user-gallery">
      <ul>
        { photos }
      </ul>
    </section>
  );
};

export default UserPhotoIndex;
