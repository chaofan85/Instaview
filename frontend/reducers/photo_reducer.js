import { RECEIVE_PHOTO, RECEIVE_COMMENT } from '../actions/photo_actions';

import merge from 'lodash/merge';

const initialState = {};
const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    case RECEIVE_COMMENT:
      return merge(
        {},
        state,
        { [action.comment.photo_id.comment_ids]:
          action.comment.photo_id.comment_ids.push(action.comment.id)}
      );
    default:
      return state;
  }
};

export default PhotoReducer;
