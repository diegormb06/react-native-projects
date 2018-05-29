import React, { Component } from 'react';
import { View } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export class Painel extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
  }

  calcular() {
    const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    console.log(resultado);
  }

  atualizaValor(nome, valor) {
    if (nome === 'num1') {
      return this.setState({ num1: valor });
    }

    this.setState({ num2: valor });
  }

  render() {
    return (
      <View>
        <Entrada 
          num1={this.state.num1} 
          num2={this.state.num2} 
          atualizaValor={this.atualizaValor}
        />
        <Operacao />
        <Comando acao={this.calcular} />
      </View>
    );
  }
}
