import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import b64 from "base-64";
import {
  INSERIR_CONTATO_EMAIL,
  ADICIONAR_CONTATO,
  ERRO_ADICIONAR_CONTATO,
  LIMPAR_CADASTRO_CONTATO,
  LISTA_CONTATO_USUARIO,
  MODIFICA_MENSAGEM,
  LISTA_CONVERSA_USUARIO
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

export const modificaMensagem = texto => {
  return {
    type: MODIFICA_MENSAGEM,
    payload: texto
  }
}

export const enviaMensagem = (dadosConversa) => {
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  const { mensagem, contatoNome, contatoEmail } = dadosConversa;
  let user64 = b64.encode(currentUser.email);
  let contato64 = b64.encode(contatoEmail);
  let nomeUsuario;
  database.ref(`usuarios/${user64}`)
  .once('value').then(snapshot => {
    nomeUsuario = snapshot.val().nome;
  });
  return dispatch => {
    database.ref(`usuarios/${user64}/contatos/${contato64}/mensagens`)
    .push({mensagem, tipo: 'e'})
    .then( () => {
      database.ref(`usuarios/${contato64}/contatos/${user64}/mensagens`)
      .push({mensagem, tipo: 'r'})
      .then( () => dispatch ({ type: 'xyz' }))
    })
    .then(() => {
      database.ref(`usuarios/${user64}/conversas/${contato64}`)
      .set({ mensagem, nome:contatoNome, email:contatoEmail })
    })
    .then(() => {
      database.ref(`usuarios/${contato64}/conversas/${user64}`)
      .set({ mensagem, nome: nomeUsuario, email:currentUser.email })
    })
  }
}

export const conversaUsuarioFetch = contatoEmail => {
  const { currentUser } = firebase.auth();
  let usuarioEmailb64 = b64.encode(currentUser.email);
  let contatoEmailb64 = b64.encode(contatoEmail);

  return dispatch => {
    firebase.database().ref(`usuarios/${usuarioEmailb64}/contatos/${contatoEmailb64}/mensagens`)
    .on('value', snapshot => {
      dispatch ({type: LISTA_CONVERSA_USUARIO, payload: snapshot.val()})
    })
  }
}
