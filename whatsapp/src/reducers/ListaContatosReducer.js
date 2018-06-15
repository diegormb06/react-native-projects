import {
  LISTA_CONTATO_USUARIO,
} from "../actions/types";

const INITIAL_STATE = {
  lista_contatos: ""
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTA_CONTATO_USUARIO:
      return { ...state, lista_contatos: action.payload }

    default:
      return state
  }
}
