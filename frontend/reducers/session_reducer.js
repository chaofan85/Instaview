import  { RECEIVE_CURRENT_USER, login, signup, logout } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const initialState = {};
const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state, { currentUser: action.user });
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
