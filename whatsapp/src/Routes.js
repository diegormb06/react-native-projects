import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from "./src/components/FormLogin";
import FormCadastro from "./src/components/FormCadastro";

const Routers = () => {
  <Router>
    <Stack key='root'>
      <Scene key='login' component={FormLogin} initial title='Login' />
      <Scene key='cadastro' component={FormCadastro} title='Cadastro' />
    </Stack>
  </Router>
}

export { Routers };