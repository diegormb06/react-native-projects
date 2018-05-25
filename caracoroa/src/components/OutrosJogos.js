import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class OutrosJogos extends Component {
  render() {
    return (
      <Text style={styles.container}>Outros jogos</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
});
