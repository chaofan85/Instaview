import { RECEIVE_COMMENT,
         RECEIVE_COMMENTS,
         REMOVE_COMMENT } from '../actions/photo_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
    // debugger
      return merge({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};


export default CommentsReducer;
