import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Principal from './components/Principal';
import OutrosJogos from './components/OutrosJogos';
import SobreJogo from './components/SobreJogo';
import Resultado from './components/Resultado';

const Rotas = () => (
  <Router>
    <Stack key='root'>
      <Scene key='apresentacao' component={Principal} initial title='Cara ou Coroa' />
      <Scene key='outrosJogos' component={OutrosJogos} title='Outros Jogos' />
      <Scene key='SobreJogo' component={SobreJogo} title='Sobre o Jogo' />
      <Scene key='Resultado' component={Resultado} title='Resultado' />
    </Stack>
  </Router>
);

export default Rotas;
