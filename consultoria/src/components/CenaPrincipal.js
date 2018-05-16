import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
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

        <View style={styles.buttons}>
          <Image source={buttonClient} />
          <Image source={buttonContato} />
          <Image source={buttonInfo} />
          <Image source={buttonServices} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    padding: 20,
    alignItems: 'center'
  },
  buttons: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  }
})
