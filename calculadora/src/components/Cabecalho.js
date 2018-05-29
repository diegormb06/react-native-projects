import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default props => (
  <View style={styles.topo} >
    <Text style={styles.titulo} >Calculadora 1.0</Text>
  </View>
);

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20,
    color: '#fff'
  }
});
