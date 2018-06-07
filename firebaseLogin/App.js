import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pontuacao: 0 };
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCOk2KB9oNcw8HClbTSQuR6I6O4KKnT_Ac',
      authDomain: 'projeto-login-react.firebaseapp.com',
      databaseURL: 'https://projeto-login-react.firebaseio.com',
      projectId: 'projeto-login-react',
      storageBucket: 'projeto-login-react.appspot.com',
      messagingSenderId: '1086551965524'
    };
    firebase.initializeApp(config);
  }

  salvarDados() {
    const database = firebase.database().ref('funcionarios');
    database.push().set({
      nome: 'Rose Rodrigues',
      idade: 53,
      peso: 65
    });
  }

  listarDados() {
    const pontuacao = firebase.database().ref('pontuacao');
    pontuacao.on('value', (snapshot) => {
      this.setState({ pontuacao: snapshot.val() });
    });
  }

  cadastrarUsuario() {
    let email = 'diegormb@live.com';
    let senha = '123456';

    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(email, senha)
    .catch((erro) => {
      let mensagemErro;
      if (erro.code === 'auth/weak-password')
        mensagemErro = 'A senha precisa ter no mínimo 6 caracteres'; 

      alert(mensagemErro);
    });
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();
    usuario.onAuthStateChanged((user) => {
      if (user) {
        alert('Usuario está logado');
      } else {
        alert('Usuário não está logado');
      }
    });
  }

  logarUsuario() {
    let email = 'diegormb@live.com';
    let senha = '123456';

    const usuario = firebase.auth();
    usuario.signInWithEmailAndPassword(email, senha)
      .catch((erro) => {
        alert(erro.message);
      });
  }

  deslogarUsuario() {
    const usuario = firebase.auth();
    usuario.signOut();
  }


  render() {
    return (
      <View>
        <Button 
          onPress={() => { this.salvarDados(); }}
          title='Salvar'
        />
        <Button
          onPress={() => { this.listarDados(); }}
          title='Listar'
          color='green'
        />
        <Button
          onPress={() => { this.cadastrarUsuario(); }}
          title='Cadastrar Usuário'
          color='black'
        />
        <Button
          onPress={() => { this.verificarUsuarioLogado(); }}
          title='Verificar usuário'
          color='grey'
        />
        <Button
          onPress={() => { this.deslogarUsuario(); }}
          title='Deslogar Usuário'
        />
        <Button
          onPress={() => { this.logarUsuario(); }}
          title='logar Usuário'
          color='darkblue'
        />
        <Text>{ this.state.pontuacao }</Text>
      </View>
    );
  }
}
