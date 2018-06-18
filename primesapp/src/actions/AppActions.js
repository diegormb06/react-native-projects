import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import b64 from "base-64";
import {
  INSERIR_CONTATO_EMAIL,
  ADICIONAR_CONTATO,
  ERRO_ADICIONAR_CONTATO,
  LIMPAR_CADASTRO_CONTATO,
  LISTA_CONTATO_USUARIO
} from "../actions/types";

export const inserirContato = email => {
  return {
    type: INSERIR_CONTATO_EMAIL,
    payload: email
  }
}

export const adicionaContato = email => {
  return dispatch => {
    const emailContato = b64.encode(email);
    firebase.database().ref(`usuarios/${emailContato}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          const currentUser = b64.encode(firebase.auth().currentUser.email);

          firebase.database().ref(`usuarios/${currentUser}/contatos/${emailContato}`)
          .set({nome: snapshot.val().nome, email})
          .then(() => {
            dispatch({ type: ADICIONAR_CONTATO });
          })
          .catch(erro => {
            dispatch({ type: ERRO_ADICIONAR_CONTATO, payload: erro });
          })
          
        } else {
          dispatch({ type: ERRO_ADICIONAR_CONTATO, payload: 'E-mail informado não corresponde a um usuário válido' });
        }
      })
  }
}

export const voltarCadastroContato = () => {
  return { type: LIMPAR_CADASTRO_CONTATO }
}

export const contatosUsuarioFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch =>{
    let currentUserB64 = b64.encode(currentUser.email);

    firebase.database().ref(`usuarios/${currentUserB64}/contatos/`)
    .on('value', snapshot => {
      dispatch({type: LISTA_CONTATO_USUARIO, payload: snapshot.val()})
    })
  }
}
