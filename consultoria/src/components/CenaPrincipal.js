import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from "./barraNavegacao";

const logoAtm = require('../img/logo.png');
const buttonClient = require('../img/menu_cliente.png');
const buttonContato = require('../img/menu_contato.png');
const buttonInfo = require('../img/menu_empresa.png');
const buttonServices = require('../img/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao />

        <View style={styles.logo}>
          <Image source={logoAtm} />
        </View>

        <View style={styles.buttonsContainer}>
          <Image style={styles.button} source={buttonClient} />
          <Image style={styles.button} source={buttonContato} />
          <Image style={styles.button} source={buttonInfo} />
          <Image style={styles.button} source={buttonServices} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    paddingTop: 20,
    alignItems: 'center'
  },
  buttonsContainer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    margin: 17
  }
})
