import firebase from 'firebase'

import { 
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS,
 LOGIN_USER_FAIL, LOGIN_USER 
} from '../actions/types'

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED, //export to logi form in function
    payload: text
  };
}

export const passwordChanged = text => { //send to loginform 
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
 return (dispatch) => {
  dispatch({ type: LOGIN_USER })

   firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
      .catch((err) => {
        console.log(err)
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
           .catch(() => loginUserFail(dispatch))
      })
 }
}
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
}