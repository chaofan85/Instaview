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
        <Link to='/signup' name='lololo'>Sign Up</Link>
        <br />
        <Link to='/login' name='lalala'>Login</Link>
      </div>
    );
};

export default Index;
