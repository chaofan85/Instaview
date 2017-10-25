import { combineReducers } from 'redux';
import RenderSessionFormsReducer from './render_session_forms_reducer';

const uiReducer = combineReducers({
  renderSessionForm: RenderSessionFormsReducer
});

export default uiReducer;
