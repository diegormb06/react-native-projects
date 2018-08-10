import React from 'react';
import Router from './Router';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducers from "./reducers";

const store = createStore(rootReducers, applyMiddleware(thunk));

const SeriesApp = props => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default SeriesApp;
