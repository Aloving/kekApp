import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMiddleware from './middlewares/promises';
import logger from 'redux-logger';
import * as reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);

const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducer, {
    days: [],
    marks: {}
});



store.subscribe(() =>
    console.log('store', store.getState())
);








export default store;