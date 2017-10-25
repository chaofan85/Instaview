import React from 'react';
import IndexContainer from './index_container';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    <IndexContainer />
  </div>
);

export default App;
