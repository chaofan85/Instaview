import { RECEIVE_PHOTO,
         RECEIVE_COMMENT,
         REMOVE_COMMENT } from '../actions/photo_actions';

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
    // case REMOVE_COMMENT:


    default:
      return state;
  }
};

export default PhotoReducer;
