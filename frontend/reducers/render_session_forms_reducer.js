import { RENDER_SIGN_UP_FORM,
         RENDER_LOGIN_FORM } from '../actions/render_forms_actions';
import merge from 'lodash/merge';

const RenderSessionFormsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RENDER_SIGN_UP_FORM:
      newState = merge({}, state, { form: action.form });
      return newState;

    case RENDER_LOGIN_FORM:
      newState = merge({}, state, { form: action.form });
      return newState;
      
    default:
      return state;
  }
};
