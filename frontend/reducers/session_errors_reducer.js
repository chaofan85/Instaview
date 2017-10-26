import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         REMOVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = [];
const  SessionErrorsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      newState = state.concat(action.errors);
      return newState;
    case REMOVE_ERRORS:
      newState = merge({}, state, { errors: [] });
      return newState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
