import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';

export default class frases_do_dia extends Component {
  render() {
    const { textStyle, container } = styles;
    return (
      <View style={container}>
        <Text style={textStyle}></Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);

const styles = {
  textStyle: { 
    fontSize: 20,
    textAlign: 'center',
    height: 50,
    width: 50,
    paddingTop: 7,
    backgroundColor: '#df534f'
  },
  container: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
};
