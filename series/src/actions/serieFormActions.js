import firebase from 'firebase'
import { Alert } from 'react-native'

export const SET_FIELD = 'SET_FIELD'
export const setField = (field, value) => ({
  type: SET_FIELD,
  field,
  value
})

export const CLEAR_FIELD = 'CLEAR_FIELD'
export const clearField = () => ({
  type: CLEAR_FIELD
})

export const SAVE_SERIE = 'SAVE_SERIE'
export const saveSerie = serie => {
  const { currentUser } = firebase.auth()
  if (serie.id) {
    console.log(serie)
    return async dispatch => {
      return await firebase.database().ref(`/users/${currentUser.uid}/series/${serie.id}`)
        .set(serie).then(() => {
          console.log('set serie')
          dispatch({ type: SAVE_SERIE })
        })
    }
  }
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

export const DELETE_SERIE = 'DELETE_SERIE'
export const deleteSerie = (serie) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Deletar',
        `Deseja deletar a série ${serie.title}?`,
        [{
          'text': 'Não',
          onPress: () => {resolve(false)},
          'style': 'cancel'
        },{
          'text': 'Sim',
            onPress: () => { removeSerieData(serie, resolve, reject) }
        }],
        { cancelable: false }
      )
    })
  }
}

const removeSerieData = async (serie, resolve, reject) => {
  const { currentUser } = firebase.auth()
  try {
    await firebase.database().ref(`/users/${currentUser.uid}/series/${serie.id}`)
          .remove();
    resolve(true);
  } catch (error) {
      reject(error)
  }
}
