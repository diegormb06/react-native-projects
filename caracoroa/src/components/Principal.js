import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnoutros = require('../imgs/outros_jogos.png');
const btnSobre = require('../imgs/sobre_jogo.png');

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image source={logo} />

          <TouchableOpacity onPress={() => { Actions.Resultado(); }}>
            <Image style={styles.btnPlay} source={btnJogar} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => { Actions.outrosJogos(); }}>
            <Image source={btnoutros} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Actions.SobreJogo(); }}>
            <Image source={btnSobre} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#61BD8C',
  },
  main: {
    marginTop: 50,
    alignItems: 'center'
  },
  btnPlay: {
    marginTop: 15
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
