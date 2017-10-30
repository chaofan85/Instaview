import { combineReducers } from 'redux';
import PhotoReducer from './photo_reducer';
import UserReducer from './user_reducer';
import CommentsReducer from './comment_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  user: UserReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;
