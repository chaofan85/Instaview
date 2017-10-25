import React from 'react';
import SignupFormContainer from './session/signup_form_container';

const Index = (props) => {
  return props.currentUser ?
    (
      <div>
        Greeting, {props.currentUser.username}
      </div>
    ) : (
      <div>
        <SignupFormContainer />
      </div>
    );
};

export default Index;
