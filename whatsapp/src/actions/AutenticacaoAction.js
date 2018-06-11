import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import b64 from "base-64";

export const modificaNome = (nome) => {
  return {
    type: 'modifica_nome',
    payload: nome
  }
}

export const modificaEmail = (texto) => {
  return {
    type: 'modifica_email',
    payload: texto
  }
}

export const modificaSenha = (senha) => {
  return {
    type: 'modifica_senha',
    payload: senha
  }
}

export const cadastraUsuario = ({nome, email, senha}) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(user => {
        let emailb64 = b64.encode(email);
        firebase.database().ref('/contatos/' + emailb64).set({nome, senha})
        .then(dados => cadastroUsuarioSucesso(dispatch))
      })
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
  }
}

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch ({type: 'cadastro_sucesso'});
  Actions.boasVindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: 'erro_cadastro', payload: erro.code });
}

export const autenticaUsuario = ({email, senha}) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(dados => loginUsuarioSucesso(dispatch))
      .catch(erro => loginUsuarioErro(erro, dispatch))
  }
}

const loginUsuarioSucesso = (dispatch) => {
  dispatch({ type: 'login_sucesso' });
}

const loginUsuarioErro = (erro, dispatch) => {
  console.log(erro);
  dispatch({ type: 'login_erro', payload: erro.message });
}
