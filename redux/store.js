import { combineReducers, createStore } from 'redux';
import { carsReducer } from './carsReducer';

let reducers = combineReducers({
   cars: carsReducer
});

let store = createStore(reducers);

export default store;