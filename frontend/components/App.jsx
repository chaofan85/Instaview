import React from 'react';
import IndexContainer from './index_container';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    <header>
      <h1>Instaview</h1>
      <IndexContainer />
      <Route path="/login" component={ LoginFormContainer} />
      <Route path="/signup" component={ SignupFormContainer } />
    </header>

  </div>
);

export default App;
