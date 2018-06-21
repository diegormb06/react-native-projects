import {
  INSERIR_CONTATO_EMAIL, 
  ERRO_ADICIONAR_CONTATO, 
  ADICIONAR_CONTATO,
  LIMPAR_CADASTRO_CONTATO,
  MODIFICA_MENSAGEM
} from "../actions/types";

const INITIAL_STATE ={
  adiciona_contato_email: '',
  contato_adicionado: false,
  erroAddContato: '',
  mensagem: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INSERIR_CONTATO_EMAIL:
      return { ...state, adiciona_contato_email: action.payload }
    case ADICIONAR_CONTATO:
      return { ...state, contato_adicionado: true }
    case ERRO_ADICIONAR_CONTATO:
      return { ...state, erroAddContato: action.payload }
    case LIMPAR_CADASTRO_CONTATO:
      return { ...state, contato_adicionado: false }
    case MODIFICA_MENSAGEM:
      return { ...state, mensagem: action.payload }
  
    default:
      return state
  }
}
