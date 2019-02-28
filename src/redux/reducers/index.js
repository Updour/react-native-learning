import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
  libraries : LibraryReducer,
  selectedLibraryId : SelectionReducer

});

  // libraries: () => [] //can use that
// console.log(store.getState())