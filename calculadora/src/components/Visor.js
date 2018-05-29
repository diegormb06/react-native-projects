import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class Visor extends Component {
  constructor(props) {
    super(props);

    this.state = { resultado: '' };
  }

  render() {
    return (
      <View>
        <TextInput 
          style={styles.inputResultado} 
          placeholder='Resultado' 
          editable={false} 
          value={this.state.resultado}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputResultado: {
    height: 80,
    fontSize: 28
  }
});
