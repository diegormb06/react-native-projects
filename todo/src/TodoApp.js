import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default class TodoApp extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <View style={{ paddingTop: 30 }}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}
