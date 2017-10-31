import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUserInfo = username => dispatch => {
  return PhotoAPIUtil.fetchUserInfo(username).then(
    user => dispatch(receiveUser(user)));
};
