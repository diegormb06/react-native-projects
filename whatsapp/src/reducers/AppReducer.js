import {
  INSERIR_CONTATO_EMAIL
} from "../actions/types";

const INITIAL_STATE ={
  adiciona_contato_email: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INSERIR_CONTATO_EMAIL:
      return { ...state, adiciona_contato_email: action.payload }
  
    default:
      return state
  }
}
