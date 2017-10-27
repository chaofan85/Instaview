import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const initialState = {};
const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]:action.photo });
    default:
      return state;
  }
};

export default PhotoReducer;
