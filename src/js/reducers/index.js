import { combineReducers } from 'redux'
import { mainReducer } from './reducer'

const combineReducer = combineReducers({
  mainReducer,
})

export default combineReducer;
