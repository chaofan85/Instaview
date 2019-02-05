import {
  RECEIVE_CURRENT_USER,
  login,
  signup,
  logout
} from "../actions/session_actions.js";
import { RECEIVE_FOLLOWING } from "../actions/user_actions";
import merge from "lodash/merge";

const initialState = {};
const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state, { currentUser: action.user });
      return newState;
    case RECEIVE_FOLLOWING:
      newState = merge({}, state);
      if (action.user.username in newState.currentUser.followings) {
        delete newState.currentUser.followings[action.user.username];
      } else {
        if (action.user.username !== newState.currentUser.username) {
          newState.currentUser.followings[action.user.username] = action.user;
          newState.currentUser.followings[action.user.username].name =
            action.user.username;
        }
      }
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
