import React from 'react';
import IndexContainer from './index_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import PhotoUpload from './photo/upload/photo_upload';
import ProfileIndexContainer from './user/profile_index_container';
import PhotoShowContainer from './photo/show/photo_show_container';
import Footer from './footer';

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path='/' component={ IndexContainer } />
      {/*}<Route path="/p/:photoId" component={ PhotoShowContainer } />*/}
      <ProtectedRoute path="/:username" component={ ProfileIndexContainer } />
    </Switch>

    <Footer />
  </div>
);

export default App;
