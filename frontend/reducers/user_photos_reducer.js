import { RECEIVE_PHOTOS } from '../actions/photo_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const UserPhtoReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
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

export default UserPhtoReducer;
