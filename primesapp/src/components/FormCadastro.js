import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TextInput, ImageBackground, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { 
  modificaEmail, 
  modificaSenha, 
  modificaNome,
  cadastraUsuario,
} from '../actions/AutenticacaoAction';

const bg = require('../img/bg.png');

class formCadastro extends Component {

  _cadastraUsuario() {
    const { nome, email, senha } = this.props;
    this.props.cadastraUsuario({nome, email, senha});
  }

  renderbtnCadastro() {
    if (this.props.loadingBtnActive) {
      return <ActivityIndicator size='large' />
    }

    return (
      <Button
        title='Cadastrar'
        color='#115E54'
        onPress={() => this._cadastraUsuario()}
      />
    )
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.imgBackground}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Cadastro de Usuário</Text>
          </View>
          <View style={styles.form}>
            <TextInput 
              value={this.props.nome} 
              style={styles.inputs} 
              placeholder='Nome' 
              placeholderTextColor='#fff'
              onChangeText={nome => this.props.modificaNome(nome)} 
            />
            <TextInput 
              value={this.props.email} 
              style={styles.inputs} 
              placeholder='Email' 
              placeholderTextColor='#fff'
              onChangeText={email => this.props.modificaEmail(email)} 
            />
            <TextInput 
              value={this.props.senha} 
              style={styles.inputs} 
              placeholder='Senha'
              placeholderTextColor='#fff'
              secureTextEntry
              onChangeText={senha => this.props.modificaSenha(senha)} 
            />
            <Text style={{color: 'red'}}>{this.props.erroCadastro}</Text>
          </View>
          <View style={styles.buttonView}>
            {this.renderbtnCadastro()}
          </View>
        </View>
      </ImageBackground>
    )
  }
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
  title: {
    fontSize: 25,
    color: '#fff'
  },
  form: {
    flex: 2,
    justifyContent: 'center',
  },
  buttonView: {
    flex: 2,
    justifyContent: 'center'
  },
  inputs: {
    fontSize: 20,
    height: 45,
    color: '#999'
  }
})

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loadingBtnActive: state.AutenticacaoReducer.loadingBtnActive
  }
)

export default connect(
  mapStateToProps, 
  { 
    modificaNome, 
    modificaEmail, 
    modificaSenha, 
    cadastraUsuario,
  }
)(formCadastro);
