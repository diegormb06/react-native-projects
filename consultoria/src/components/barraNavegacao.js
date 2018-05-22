import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const btnBack = require('../img/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    const navigation = this.props.navigation;
    const backgroundColor = this.props.backgroundColor;

    if (this.props.backButton) {
      return (
        <View style={[styles.header, {backgroundColor: backgroundColor}]} >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={btnBack} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} >ATM Consultoria</Text>
        </View>
      );
    }

    return (
      <View style={styles.header} >
        <Text style={styles.headerTitle} >ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ccc',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16
  }
});
