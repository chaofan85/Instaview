import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';

const initialState = [];
const  SessionErrorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      let newState = state.concat(action.errors);
      return newState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
