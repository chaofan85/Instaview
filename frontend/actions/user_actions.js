import * as PhotoAPIUtil from "../util/photo_api_util";
import * as UserAPIUtil from "../util/user_api_util";
import { receiveCurrentUser } from "./session_actions";


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const receiveFollowing = user => {
  return {
    type: RECEIVE_FOLLOWING,
    user
  };
};

export const fetchUserInfo = username => dispatch => {
  return PhotoAPIUtil.fetchUserInfo(username).then(user =>
    dispatch(receiveUser(user))
  );
};

export const followUser = followeeId => dispatch => {
  return UserAPIUtil.followUser(followeeId).then(user =>
    dispatch(receiveFollowing(user))
  );
};

export const unFollowUser = followeeId => dispatch => {
  return UserAPIUtil.unFollowUser(followeeId).then(user =>
    dispatch(receiveFollowing(user))
  );
};

export const uploadAvatar = (id, formData) => dispatch => {
  return UserAPIUtil.createPhoto(id, formData).then(payload =>
    dispatch(receiveCurrentUser(payload))
  );
};
