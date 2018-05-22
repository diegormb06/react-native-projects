import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaContato from './src/components/CenaContato';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

let TransitionConfigurationSlider = () => {
  return {
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [layout.initWidth, 0, 0]
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0]
      });

      return { opacity, transform: [{ translateX }] }
    }
  }
};

const RootStack = createStackNavigator(
  {
    Home: CenaPrincipal,
    Cliente: CenaClientes,
    Contato: CenaContato,
    Empresa: CenaEmpresa,
    Servicos: CenaServicos
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    },
    transitionConfig: TransitionConfigurationSlider
  }
);

export default class App extends Component {
  render() {
    return (
      <RootStack />
    )
  }
}
