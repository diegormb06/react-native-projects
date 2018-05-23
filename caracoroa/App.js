import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnoutros = require('./src/imgs/outros_jogos.png');
const btnSobre = require('./src/imgs/sobre_jogo.png');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Cara ou coroa</Text>
        </View>

        <View>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>

        <View>
          <Image source={btnoutros} />
          <Image source={btnSobre} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#55b08b',
  },
  header: {
    backgroundColor: '#ccc'
  }
});
