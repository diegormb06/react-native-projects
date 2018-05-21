import React, { Component } from 'react';

import ListaItems from './src/components/listaitems';

export default class App extends Component {
  render() {
    console.log('teste debug');
    return (
      <ListaItems />
    );
  }
}
