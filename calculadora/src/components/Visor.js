import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View>
    <TextInput 
      style={styles.inputResultado} 
      placeholder='Resultado' 
      editable={false} 
      value={props.resultado}
    />
  </View>
);

const styles = StyleSheet.create({
  inputResultado: {
    height: 80,
    fontSize: 28
  }
});
