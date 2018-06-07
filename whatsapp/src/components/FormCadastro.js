import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

export default class FormCadastro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastro de Usuário</Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.inputs} placeholder='Nome' />
          <TextInput style={styles.inputs} placeholder='Email' />
          <TextInput style={styles.inputs} placeholder='Senha' />
        </View>
        <View style={styles.buttonView}>
          <Button title='Cadastrar' color='#115E54' onPress={() => false} />
        </View>
      </View>
    )
  };
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
  title: {
    fontSize: 25
  },
  form: {
    flex: 2,
    justifyContent: 'center',
  },
  buttonView: {
    flex: 2
  },
  inputs: {
    fontSize: 20,
    height: 45
  }
})
