import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


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

const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
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

export const deleteComment = (comment) => (dispatch) => {
  return PhotoAPIUtil.deleteComment(comment.id).then(
    (returnedPhoto) => dispatch(receivePhoto(returnedPhoto)));
};
