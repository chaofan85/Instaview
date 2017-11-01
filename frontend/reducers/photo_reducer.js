import { RECEIVE_PHOTO,
         RECEIVE_COMMENT,
         REMOVE_COMMENT,
         RECEIVE_PHOTOS } from '../actions/photo_actions';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

import merge from 'lodash/merge';

const initialState = {};
const PhotoReducer = (state = initialState, action) => {
  let newComments;
  let newPhoto;
  switch (action.type) {

    case RECEIVE_PHOTO:
      return Object.assign({}, state, {
        [action.photo.photoId]: action.photo
       });


    case RECEIVE_COMMENT:
      const newIds = state[action.comment.photo_id].
                     comment_ids.
                     concat(action.comment.id);
      newComments = state[action.comment.photo_id].
                         comments.
                         concat(action.comment);
      newPhoto = merge(
        {},
        state[action.comment.photo_id],
        { comment_ids: newIds, comments: newComments }
      );

      return merge(
        {},
        state,
        { [action.comment.photo_id]: newPhoto }
      );

    case RECEIVE_CURRENT_USER:
      if (action.user) {
        return merge({}, state, action.user.photos);
      } else {
        return {};
      }

    case RECEIVE_PHOTOS:
      return Object.values(action.photos).map(photo => {
        return photo.photo;
      });

    default:
      return state;
  }
};

export default PhotoReducer;
