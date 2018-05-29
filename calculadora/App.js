import React from 'react';
import {
  View
} from 'react-native';

import { Topo, Resultado, Painel } from './src/components';

const App = () => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
);

export default App;
