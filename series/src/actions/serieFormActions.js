import firebase from 'firebase'

export const SET_FIELD = 'SET_FIELD'
export const setField = (field, value) => ({
  type: SET_FIELD,
  field,
  value
})

export const SAVE_SERIE = 'SAVE_SERIE'
export const saveSerie = serie => {
  const { currentUser } = firebase.auth()

  return async dispatch => {
    return await firebase.database().ref(`/users/${currentUser.uid}/series`)
    .push(serie).then(() => {
      dispatch({ type: SAVE_SERIE })  
    })
  }
}

export const EDIT_SERIE = 'EDIT_SERIE'
export const editSerie = (serie) => ({
  type: EDIT_SERIE,
  serie
})
