import {
  MODIFICA_NOME,
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  CADASTRO_SUCESSO,
  ERRO_CADASTRO,
  LOGIN_SUCESSO,
  LOGIN_ERRO
} from "../actions/types";

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: '',
  erroLogin: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case MODIFICA_NOME:
      return { ...state, nome: action.payload }

    case MODIFICA_EMAIL:
      return { ...state, email: action.payload }

    case MODIFICA_SENHA:
      return { ...state, senha: action.payload }

    case ERRO_CADASTRO:
      if (action.payload == 'auth/email-already-in-use') {
        return { ...state, erroCadastro: 'O e-mail informado já está sendo utilizado' }
      }
      if (action.payload == 'auth/weak-password') {
        return { ...state, erroCadastro: 'A senha precisa ter no mínimo 6 caracteres' }
      }

    case CADASTRO_SUCESSO:
      return { ...state, nome: '', senha: '' }

    case LOGIN_ERRO:
      return { ...state, erroLogin: action.payload}

    default:
      return state;
  }
}
