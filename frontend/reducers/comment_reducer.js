import { RECEIVE_COMMENT,
         RECEIVE_COMMENTS,
         REMOVE_COMMENT } from '../actions/photo_actions';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);

    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });

    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;

    case RECEIVE_CURRENT_USER:
      if (!action.user) {
        return {};
      } else {
        return state;
      }

    default:
      return state;
  }
};


export default CommentsReducer;
