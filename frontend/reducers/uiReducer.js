import { combineReducers } from 'redux';
import RenderSessionFormsReducer from './RenderSessionFormsReducer';

const uiReducer = combineReducers({
  renderSessionForm: RenderSessionFormsReducer
});

export default uiReducer;
