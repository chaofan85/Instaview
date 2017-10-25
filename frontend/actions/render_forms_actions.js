export const RENDER_SIGN_UP_FORM = 'RENDER_SIGN_UP_FORM';
export const RENDER_LOGIN_FORM = 'RENDER_LOGIN_FORM';

const renderSignUpForm = (form) => {
  return {
    type: RENDER_SIGN_UP_FORM,
    form
  };
};

const renderLoginForm = (form) => {
  return {
    type: RENDER_LOGIN_FORM,
    form
  };
};

export const getSignUpForm = (form) => dispatch => {
  return dispatch(renderSignUpForm(form));
};

export const getLoginForm = (form) => dispatch => {
  return dispatch(renderLoginForm(form));
};
