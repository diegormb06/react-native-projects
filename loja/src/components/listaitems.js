import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import axios from 'axios';
import Item from './item';

export default class ListaItems extends Component {

  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
          .then(itens => { 
            this.setState({ listaItens: itens.data });
          })
          .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
        {this.state.listaItens.map(item => (<Item key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}
