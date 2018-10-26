import { SET_FIELD, SAVE_SERIE, EDIT_SERIE, CLEAR_FIELD } from '../actions'

const INITIAL_STATE = {
  id: null,
  title: '',
  gender: 'Action',
  rate: 0,
  img: '',
  description: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FIELD:
      const newState = { ...state };
      newState[action.field] = action.value;
      return newState;

    case CLEAR_FIELD:
      return INITIAL_STATE

    case SAVE_SERIE:
      return INITIAL_STATE

    case EDIT_SERIE:
      return {...action.serie}

    default:
      return state;
  }
};
