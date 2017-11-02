import { combineReducers } from 'redux';
import PhotoReducer from './photo_reducer';
import UserReducer from './user_reducer';
import CommentsReducer from './comment_reducer';
import UserPhtoReducer from './user_photos_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  user: UserReducer,
  comments: CommentsReducer,
  userPhotos: UserPhtoReducer
});

export default EntitiesReducer;
