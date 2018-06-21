import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import b64 from "base-64";
import { 
  MODIFICA_NOME, 
  MODIFICA_EMAIL, 
  MODIFICA_SENHA, 
  CADASTRO_SUCESSO, 
  ERRO_CADASTRO,
  LOGIN_SUCESSO, 
  LOGIN_ERRO,
  LOADING_ATIVO
} from "./types";

export const modificaNome = (nome) => {
  return {
    type: MODIFICA_NOME,
    payload: nome
  }
}

export const modificaEmail = (texto) => {
  return {
    type: MODIFICA_EMAIL,
    payload: texto
  }
}

export const modificaSenha = (senha) => {
  return {
    type: MODIFICA_SENHA,
    payload: senha
  }
}

export const cadastraUsuario = ({nome, email, senha}) => {
  return dispatch => {
    dispatch({ type: LOADING_ATIVO });

    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(user => {
        let emailb64 = b64.encode(email);
        firebase.database().ref(`/usuarios/${emailb64}`).set({nome, senha})
        .then(dados => cadastroUsuarioSucesso(dispatch))
      })
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
  }
}

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch ({type: CADASTRO_SUCESSO});
  Actions.boasVindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: ERRO_CADASTRO, payload: erro.code });
}

export const autenticaUsuario = ({email, senha}) => {
  return dispatch => {
    dispatch({ type: LOADING_ATIVO })

    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(dados => loginUsuarioSucesso(dispatch))
      .catch(erro => loginUsuarioErro(erro, dispatch))
    }
  }
  const loginUsuarioSucesso = (dispatch) => {
    dispatch({ type: LOGIN_SUCESSO });
    Actions.principal();
}

const loginUsuarioErro = (erro, dispatch) => {
  dispatch({ type: LOGIN_ERRO, payload: erro.message });
}
