import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from "./barraNavegacao";

const iconEmpresa = require('../img/detalhe_empresa.png');
const backgroundColor = '#EC7148';

export default class CenaContato extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao navigation={navigation} backButton backgroundColor={backgroundColor} />

        <View style={styles.header}>
          <Image source={iconEmpresa} />
          <Text style={styles.title}>A Empresa</Text>
        </View>

        <View style={styles.infoContainer} >
          <Text>Informações importantes sobre a Empresa que as pessoas poderão consultar</Text>
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
    color: '#EC7148',
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  infoContainer: {
    paddingHorizontal: 15
  }
});
