import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from "./components/FormLogin";
import FormCadastro from "./components/FormCadastro";
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default () => (
  <Router navigationBarStyle={{backgroundColor:'#115E54'}} titleStyle={{color: '#fff'}} >
    <Stack key='root'>
      <Scene key='login' component={FormLogin} title='Login' hideNavBar />
      <Scene key='cadastro' component={FormCadastro} title='Cadastro' />
      <Scene key='boasVindas' component={BoasVindas} title='Bem Vindo Primata!' hideNavBar/>
      <Scene key='principal' component={Principal} initial title='Principal' hideNavBar/>
    </Stack>
  </Router>
)
