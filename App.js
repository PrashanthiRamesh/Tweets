import React from 'react';
import TweetsList from './components/TweetsList';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';


// const client = axios.create({
//   baseURL: 'https://api.twitter.com',
//   responseType: 'json',
//   headers: { 'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAHjSFQEAAAAABb1yKIwGINddNVWOSxcl0Q2EjF0%3DiNsyEGCr62CxlfLprXedMMu0R3OFcsNjyZoWXurKhZ8azNMYhA' }
// });

// const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default function App() {
  return (
    // <Provider store={store}>
      <TweetsList />
    // </Provider>
  )
}


