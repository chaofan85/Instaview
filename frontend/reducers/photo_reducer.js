import { RECEIVE_PHOTO,
         RECEIVE_COMMENT,
         REMOVE_COMMENT,
         RECEIVE_PHOTOS,
         REMOVE_PHOTO} from '../actions/photo_actions';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

import merge from 'lodash/merge';

const initialState = {};
const PhotoReducer = (state = initialState, action) => {
  let newState;
  let newComments;
  let newPhoto;
  switch (action.type) {

    case RECEIVE_PHOTO:
      return Object.assign({}, state, {
        [action.photo.photoId]: action.photo
       });

    case RECEIVE_CURRENT_USER:
      if (action.user) {
        return merge({}, state, action.user.photos);
      } else {
        return {};
      }

    case RECEIVE_PHOTOS:
      return Object.assign({}, state, action.photos);

    case REMOVE_PHOTO:
      newState = merge({}, state);
      delete newState[action.photoId];
      return newState;

    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.photo_id].comment_ids.push(action.comment.id);
      return newState;

    case REMOVE_COMMENT:
      newState = merge({}, state);
      let ids = newState[action.comment.photo_id].comment_ids;
      const index = ids.indexOf(action.comment.id);
      const newIds = ids.slice(0, index).concat(ids.slice(index+1, ids.length));
      newState[action.comment.photo_id].comment_ids = newIds;
      return newState;

    default:
      return state;
  }
};

export default PhotoReducer;
