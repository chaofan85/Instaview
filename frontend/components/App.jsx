import React from 'react';
import IndexContainer from './index_container';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import PhotoUpload from './photo/upload/photo_upload';
import ProfileIndexContainer from './user/profile_index_container';

const App = () => (
  <div className="app">
    <Route exact path='/' component={ IndexContainer } />
    {/*<Route exact path='/upload' component={ PhotoUpload } />*/}
    <Route path="/:username" component={ ProfileIndexContainer } />
  </div>
);

export default App;
