import {
  INSERIR_CONTATO_EMAIL, 
  ERRO_ADICIONAR_CONTATO, 
  ADICIONAR_CONTATO,
  LIMPAR_CADASTRO_CONTATO
} from "../actions/types";

const INITIAL_STATE ={
  adiciona_contato_email: '',
  contato_adicionado: false,
  erroAddContato: ''
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
  
    default:
      return state
  }
}
