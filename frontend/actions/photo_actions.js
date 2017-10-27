import { createPhoto, fetchPhotos } from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

// const receivePhotos = (photos) => {
//   return {
//     type: RECEIVE_PHOTOS,
//     photos
//   };
// };

const receivePhoto = (photo) => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

export const uploadPhoto = (formData) => (dispatch) => {
  return createPhoto(formData).then(
  (photo) => dispatch(receivePhoto(photo)));
};

// export const getPhotoFeeds = (userId) => (dispatch) => {
//   return fetchPhotos(userId).then(
//     (photos) => dispatch(receivePhotos(photos)));
// };
