import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receivePhotos = (photos) => {
  return {
    type: RECEIVE_PHOTOS,
    photos
  };
};

const receivePhoto = (photo) => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

const removePhoto = (photo) => {
  return {
    type: REMOVE_PHOTO,
    photo
  };
};

const receiveComments = (payload) => {
  return {
    type: RECEIVE_COMMENTS,
    comments: payload.comments
  };
};

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

export const uploadPhoto = (formData) => (dispatch) => {
  return PhotoAPIUtil.createPhoto(formData).then(
  (payload) => dispatch(receivePhoto(payload)));
};

export const fetchPhoto = (photoId) => (dispatch) => {
  return PhotoAPIUtil.fetchPhoto(photoId).then(
  (payload) => dispatch(receivePhoto(payload)));
};

export const fetchPhotos = (userId, start, end) => (dispatch) => {
  return PhotoAPIUtil.fetchFeeds(userId, start, end).then(
    payload => dispatch(receivePhotos(payload)));
};

export const fetchUserPhotos = (username) => (dispatch) => {
  return PhotoAPIUtil.fetchUserPhotos(username).then(
    payload => dispatch(receivePhotos(payload))
  );
};

export const deletePhoto = (photoId) => (dispatch) => {
  return PhotoAPIUtil.deletePhoto(photoId).then(
    (payload) => dispatch(deletePhoto(payload)));
};

export const addLike = (photoId) => (dispatch) => {
  return PhotoAPIUtil.addLike(photoId).then(
    (payload) => dispatch(receivePhoto(payload)));
};

export const deleteLike = (photoId) => (dispatch) => {
  return PhotoAPIUtil.deleteLike(photoId).then(
    (payload) => dispatch(receivePhoto(payload)));
};

export const fetchComments = (photoId) => (dispatch) => {
  return PhotoAPIUtil.fetchComments(photoId).then(
    (payload) => dispatch(receiveComments(payload)));
};

export const addComment = (comment) => (dispatch) => {
  return PhotoAPIUtil.addComment(comment).then(
    (payload) => dispatch(receiveComment(payload)));
};

export const deleteComment = (comment) => (dispatch) => {
  return PhotoAPIUtil.deleteComment(comment.id).then(
    (payload) => dispatch(removeComment(payload)));
};
