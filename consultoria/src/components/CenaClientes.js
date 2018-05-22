import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from "./barraNavegacao";

const iconClientes = require('../img/detalhe_cliente.png');
const cliente1 = require('../img/cliente1.png');
const cliente2 = require('../img/cliente2.png');
const backgroundColor = '#B9C941';

export default class CenaClientes extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao navigation={navigation} backButton backgroundColor={backgroundColor} />

        <View style={styles.header}>
          <Image source={iconClientes} />
          <Text style={styles.title}>Nossos Clientes</Text>
        </View>

        <View style={styles.clienteView}>
          <Image source={cliente1} />
          <Text style={styles.txt}>Lorem Ipsum Dolore</Text>
        </View>

        <View style={styles.clienteView}>
          <Image source={cliente2} />
          <Text style={styles.txt}>Lorem Ipsum Dolore</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 15,
    flexDirection: 'row'
  },
  title: {
    color: '#B9C941',
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  clienteView: {
    margin: 15,
  },
  txt: {
    fontSize: 18,
    marginLeft: 20
  }
})
