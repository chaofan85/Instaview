import { combineReducers } from 'redux';
import PhotoReducer from './photo_reducer';
import CommentsReducer from './comment_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;
