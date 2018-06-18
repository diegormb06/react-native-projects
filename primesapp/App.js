import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from "redux-thunk";

import Routes from './src/Routes';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBNzFOxOc7CzNk8RJiNr7p7GfPLaXEwaXs",
      authDomain: "primezap-44fff.firebaseapp.com",
      databaseURL: "https://primezap-44fff.firebaseio.com",
      projectId: "primezap-44fff",
      storageBucket: "primezap-44fff.appspot.com",
      messagingSenderId: "245178628677"
    };
    firebase.initializeApp(config); 
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
