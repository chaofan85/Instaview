import * as SessionAPIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user).then(
    (loggedInUser) => dispatch(receiveCurrentUser(loggedInUser)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user).then(
    (signedUpUser) => dispatch(receiveCurrentUser(signedUpUser)),
    (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    }
  );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const clearErrors = () => dispatch => {
  return dispatch(removeErrors());
};
