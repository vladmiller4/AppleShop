import combineReducers from './reducers/index'
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function setupStore() {
  return createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
}