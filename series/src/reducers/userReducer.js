import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions'

const USER_SERIES = {
  series: []
}

export default (state = USER_SERIES, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {...USER_SERIES, series: action.series};

    case USER_LOGOUT:
      return null;

    default:
      return state;
  }
}
