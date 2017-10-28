import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


const receivePhoto = (photo) => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
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

export const addComment = (comment) => (dispatch) => {
  return PhotoAPIUtil.addComment(comment).then(
    (returnedComment) => dispatch(receiveComment(returnedComment)));
};
