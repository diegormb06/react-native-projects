import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from "./components/FormLogin";
import FormCadastro from "./components/FormCadastro";
import BoasVindas from './components/BoasVindas';

export default () => (
  <Router>
    <Stack key='root'>
      <Scene key='login' component={FormLogin} initial title='Login' />
      <Scene key='cadastro' component={FormCadastro} title='Cadastro' />
      <Scene key='boasVindas' component={BoasVindas} title='Bem Vindo Primata!' />
    </Stack>
  </Router>
)
