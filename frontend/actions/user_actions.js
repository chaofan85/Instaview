import * as PhotoAPIUtil from '../util/photo_api_util';
import * as UserAPIUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

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

export const followUser = follow => dispatch => {
  return UserAPIUtil.followUser(follow).then(
    user => dispatch(receiveCurrentUser(user)));
};
