import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput 
  style={styles.numero} 
  value={props.num} 
  onChangeText={valor => props.atualizaValor(props.nome, valor)}
  />
);

const styles = StyleSheet.create({
  numero: {
    width: 140,
    fontSize: 20
  }
});
