import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  return props.currentUser ?
    (
      <div>
        Greeting, {props.currentUser.username}
      </div>
    ) : (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br />
        <Link to='/login'>Login</Link>
      </div>
    );
};

export default Index;
