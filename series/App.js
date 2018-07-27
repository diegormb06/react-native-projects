import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './src/scenes/Login'
import ListaSeries from "./src/scenes/ListaSeries";

const RootStack = createStackNavigator(
  {
    Home: Login,
    ListaSeries: ListaSeries
  },
  {
    navigationOptions: {
      title: 'Series',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
