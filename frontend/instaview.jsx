import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {

    const photos = window.currentUser.photos;
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
  window.store = store;

  ReactDOM.render(<Root store={ store } />, root);
});
