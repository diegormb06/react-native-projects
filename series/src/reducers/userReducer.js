import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions'

export default (state = null, action) => {
  console.log(action.type);
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.user;
    case USER_LOGOUT:
      return null;
      
    default:
      return state;
  }
};
