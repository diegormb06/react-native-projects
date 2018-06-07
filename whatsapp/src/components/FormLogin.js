import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

export default class FormLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>WhatsApp Clone</Text>
        </View>
        <View style={styles.inputsLogin}>
          <TextInput style={styles.inputs} placeholder='Email' />
          <TextInput style={styles.inputs} placeholder='Senha' />
          <TouchableOpacity onPress={() => { Actions.cadastro(); }}>
            <Text style={styles.textoCadastro}>Ainda não tem cadastro? Cadastre-se.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonAction}>
          <Button title='Acessar' color='#115E54' onPress={() => false} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsLogin: {
    flex: 2
  },
  buttonAction: {
    flex: 2
  },
  title: {
    fontSize: 25
  },
  inputs: {
    fontSize: 20,
    height: 45
  },
  textoCadastro: {
    fontSize: 20
  }
})
