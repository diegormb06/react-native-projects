import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BarraNavegacao from "./barraNavegacao";

const iconServicos = require('../img/detalhe_servico.png');
const backgroundColor = '#19D1C8';

export default class CenaContato extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao navigation={navigation} backButton backgroundColor={backgroundColor} />

        <View style={styles.header}>
          <Image source={iconServicos} />
          <Text style={styles.title}>Nossos Serviços</Text>
        </View>

        <View style={styles.infoContainer} >
          <Text>-Consultoria</Text>
          <Text>-Processos</Text>
          <Text>-Acompanhamento de projetos</Text>
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
    color: '#19D1C8',
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  infoContainer: {
    paddingHorizontal: 15
  }
});
