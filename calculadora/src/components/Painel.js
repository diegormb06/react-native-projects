import React, { Component } from 'react';
import { View } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export class Painel extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', operacao: '' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.mudaOperador = this.mudaOperador.bind(this);
  }

  calcular() {
    let resultado;
    if (this.state.operacao === 'soma') {
      resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    } else {
      resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
    }
    
    console.log(resultado);
  }

  atualizaValor(nome, valor) {
    const numeros = {};
    numeros[nome] = valor;
    this.setState(numeros);
  }

  mudaOperador(operador) {
    this.setState({ operacao: operador });
    console.log(operador);
  }

  render() {
    return (
      <View>
        <Entrada 
          num1={this.state.num1} 
          num2={this.state.num2} 
          atualizaValor={this.atualizaValor}
        />
        <Operacao 
          operacao={this.state.operacao} 
          operador={this.mudaOperador}
        />
        <Comando acao={this.calcular} />
      </View>
    );
  }
}
