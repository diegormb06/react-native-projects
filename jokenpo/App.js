import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class MyComponent extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { texto: 'texo de teste' };
  }

  alteraTexto() {
    this.setState({ texto: 'Outro texto' });
  }

  render() {
    return (
      <View style={styles.container}>
        <MyComponent teste={this.state.texto}></MyComponent>

        <Button 
          onPress={this.alteraTexto}
          title='Botão'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
