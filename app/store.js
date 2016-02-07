import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import ENV from '../lib/env_vars';
import {appState} from './reducers';


const IS_DEV = ENV === 'dev';

let middlewares = []
let store;
let rootReducer;

if (IS_DEV) {
  middlewares.push(createLogger());
}

rootReducer = combineReducers({appState});
store = applyMiddleware(..middlewares)(createStore);

export default store;
