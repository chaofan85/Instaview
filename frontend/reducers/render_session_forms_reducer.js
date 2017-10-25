import { SWITCH_FORM } from '../actions/render_forms_actions';
import merge from 'lodash/merge';

const RenderSessionFormsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case SWITCH_FORM:
      return { shouldRender: !action.shouldRender };

    default:
      return state;
  }
};

export default RenderSessionFormsReducer;
