export const SWITCH_FORM = 'SWITCH_FORM';


const switchForm = (shouldRender) => {
  return {
    type: SWITCH_FORM,
    shouldRender
  };
};

export const renderLogin = (shouldRender) => dispatch => {
  return dispatch(switchForm(shouldRender));
};
