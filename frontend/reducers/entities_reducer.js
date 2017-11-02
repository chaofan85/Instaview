import { combineReducers } from 'redux';
import PhotoReducer from './photo_reducer';
import UserReducer from './user_reducer';
import CommentsReducer from './comment_reducer';
import FolloweesReducer from './followees_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  user: UserReducer,
  comments: CommentsReducer,
  followees: FolloweesReducer
});

export default EntitiesReducer;
