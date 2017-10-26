import { RECEIVE_PHOTO } from '../actions/photo_actions';

const initialState = {};
const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTO:
      return action.photo;
    default:
      return state;
  }
};

export default PhotoReducer;
