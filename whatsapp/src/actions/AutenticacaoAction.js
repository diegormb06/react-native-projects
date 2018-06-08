import firebase from "firebase";
import { Actions } from "react-native-router-flux";

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
      .then(user => cadastroUsuarioSucesso(dispatch))
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
  }
}

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch ({type: 'Sucesso'});
  Actions.boasVindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: 'erro_cadastro', payload: erro.code });
}
