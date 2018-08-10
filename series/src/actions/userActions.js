export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const loginUserSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
})

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
  type: USER_LOGOUT
})
