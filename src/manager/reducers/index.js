import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'

export default combineReducers({
  // banana : () => [] // this array
  auth: AuthReducer
})