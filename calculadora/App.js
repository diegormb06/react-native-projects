import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './src/components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', operacao: '', resultado: '0' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.mudaOperador = this.mudaOperador.bind(this);
  }

  calcular() {
    let resultado;
    if (this.state.operacao === 'subtracao') {
      resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
    } else {
      resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    }

    this.setState({ resultado: resultado.toString() });
  }

  atualizaValor(nome, valor) {
    const numeros = {};
    numeros[nome] = valor;
    this.setState(numeros);
  }

  mudaOperador(operacao) {
    this.setState({ operacao });
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel 
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaValor={this.atualizaValor}
          mudaOperador={this.mudaOperador}
        />
      </View>
    );
  }
}
