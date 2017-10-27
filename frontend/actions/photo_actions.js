import { createPhoto } from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';


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
