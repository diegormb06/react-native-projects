import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
    return (
      <View >
        <Text style={styles.header} >ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    backgroundColor: '#ccc',
    padding: 20,
    fontSize: 16
  }
})
