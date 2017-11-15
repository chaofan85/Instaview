import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchUserInfo, followUser, fetchPhotos } from './actions/user_actions';
import merge from 'lodash/merge';

// To keep heroku app awake
var http = require("http");
setInterval(function() {
    http.get("https://accesscontrolalloworiginall.herokuapp.com/https://instaview-app.herokuapp.com/");
}, 300000);

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {

    const photos = window.photos;
    delete window.currentUser["photos"];

    const preloadedState = {
      session: { currentUser: window.currentUser },
      entities: { photos: photos }
     };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store } />, root);
});
