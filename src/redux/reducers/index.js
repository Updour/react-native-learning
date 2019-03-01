import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
  libraries : LibraryReducer, // get data from LibraryReducer
  selectedLibraryId : SelectionReducer //execution when onPress payload from action 
});

  // libraries: () => [] //can use that
// console.log(store.getState())