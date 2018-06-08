import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoAction';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const bg = require('../img/bg.png');

const formLogin = props => {
  return (
    <ImageBackground source={bg} style={styles.imgBackground}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>PrimeZap</Text>
        </View>
        <View style={styles.inputsLogin}>
          <TextInput 
            value={props.email} 
            style={styles.inputs} 
            placeholder='Email' 
            placeholderTextColor='#fff'
            onChangeText={email => {props.modificaEmail(email)}} 
          />

          <TextInput 
            value={props.senha} 
            style={styles.inputs} 
            placeholder='Senha' 
            placeholderTextColor='#fff'
            secureTextEntry
            onChangeText={senha => {props.modificaSenha(senha)}}
          />

          <TouchableOpacity onPress={() => { Actions.cadastro(); }}>
            <Text style={styles.textoCadastro}>Ainda não tem cadastro? Cadastre-se.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonAction}>
          <Button title='Acessar' color='#115E54' onPress={() => false} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
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
    flex: 2,
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    color: '#fff'
  },
  inputs: {
    fontSize: 20,
    height: 45,
    color: '#999'
  },
  textoCadastro: {
    fontSize: 20,
    color: '#fff'
  }
})

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
