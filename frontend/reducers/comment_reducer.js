import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      console.log(action.comments);
      
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    default:
      return state;
  }
};


export default CommentsReducer;
