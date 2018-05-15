import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import ListaItems from './src/components/listaitems';

export default class App extends Component {
  render() {
    console.log('teste debug');
    return (
      <ListaItems />
    );
  }
}
