import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import uiReducer from './uiReducer';

const RootReducer = combineReducers({
  ui: uiReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
});

export default RootReducer;
