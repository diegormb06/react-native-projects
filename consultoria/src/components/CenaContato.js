import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from "./barraNavegacao";

const iconContato = require('../img/detalhe_contato.png');
const backgroundColor = '#61BD8C';

export default class CenaContato extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao navigation={navigation} backButton backgroundColor={backgroundColor} />

        <View style={styles.header}>
          <Image source={iconContato} />
          <Text style={styles.title}>Contatos</Text>
        </View>

        <View style={styles.infoContainer} >
          <Text>TEL: (62) 9999-9999</Text>
          <Text>CEL: (62) 9999-9999</Text>
          <Text>EMAIL: contato@empresa.com.br</Text>
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
    color: '#61BD8C',
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  infoContainer: {
    paddingHorizontal: 15
  }
});
