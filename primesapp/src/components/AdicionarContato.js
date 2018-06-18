import React, { Component } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { connect } from "react-redux";
import {
  inserirContato,
  adicionaContato,
  voltarCadastroContato
} from '../actions/AppActions';

class AdicionarContato extends Component {

  componentWillUnmount() {
    this.props.voltarCadastroContato()
  }

  renderAdicionarContato() {
    if (!this.props.contato_adicionado) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
              placeholder='Email'
              style={{ fontSize: 20, height: 45 }}
              onChangeText={(email) => this.props.inserirContato(email)}
              value={this.props.adiciona_contato_email}
            />
            <Text style={{ color: 'red', textAlign: 'center' }}>{this.props.erroAddContato}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title='Adicionar'
              color='#115E54'
              onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)}
            />
          </View>
        </View>
      )
    }
    
    return (
      <View style={{ padding: 20 }}>
        <Text style={{fontSize: 22, color: 'green', textAlign: 'center'}} >Contato Adicionado com sucesso</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {this.renderAdicionarContato()}
      </View>
    )
  }
};

const mapStateToProps = state => ({
  adiciona_contato_email: state.AppReducer.adiciona_contato_email,
  erroAddContato: state.AppReducer.erroAddContato,
  contato_adicionado: state.AppReducer.contato_adicionado
})

export default connect(
  mapStateToProps, 
  { 
    inserirContato, 
    adicionaContato,
    voltarCadastroContato 
  }
)(AdicionarContato)
