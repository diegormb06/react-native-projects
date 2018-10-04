import { SET_FIELD, SAVE_SERIE } from '../actions'

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

    case SAVE_SERIE:
      return INITIAL_STATE

    default:
      return state;
  }
};
