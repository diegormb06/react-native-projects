import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  INSERIR_CONTATO_EMAIL,
  ADICIONAR_CONTATO
} from "../actions/types";

export const inserirContato = email => {
  return {
    type: INSERIR_CONTATO_EMAIL,
    payload: email
  }
}
