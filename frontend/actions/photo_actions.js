import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';


const receivePhoto = (photo) => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

export const uploadPhoto = (formData) => (dispatch) => {
  return PhotoAPIUtil.createPhoto(formData).then(
  (photo) => dispatch(receivePhoto(photo)));
};

export const addLike = (photoId) => (dispatch) => {
  return PhotoAPIUtil.addLike(photoId).then(
    (photo) => dispatch(receivePhoto(photo)));
};

export const deleteLike = (photoId) => (dispatch) => {
  return PhotoAPIUtil.deleteLike(photoId).then(
    (photo) => dispatch(receivePhoto(photo)));
};
