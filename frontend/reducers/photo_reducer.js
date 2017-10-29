import { RECEIVE_PHOTO, RECEIVE_COMMENT } from '../actions/photo_actions';

import merge from 'lodash/merge';

const initialState = {};
const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    case RECEIVE_COMMENT:
      const newIds = state[action.comment.photo_id].
                     comment_ids.
                     concat(action.comment.id);
      const newComments = state[action.comment.photo_id].
                         comments.
                         concat(action.comment);
      const newPhoto = merge(
        {},
        state[action.comment.photo_id],
        { comment_ids: newIds, comments: newComments }
      );

      return merge(
        {},
        state,
        { [action.comment.photo_id]: newPhoto }
      );
    default:
      return state;
  }
};

export default PhotoReducer;
