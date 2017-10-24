import React from 'react';
import { Link } from 'react-router-dom';

const SessionIndex = (props) => {
  return props.currentUser?
    (
      <div>
        <LoginForm />
      </div>
    ) : (
      <div>
        <SignupForm />
      </div>
    );
};

export default SessionIndex;
