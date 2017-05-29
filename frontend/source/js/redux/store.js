import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMiddleware from './middlewares/promises';
import * as reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);

const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducer, {
    days: [],
    marks: {},
    stat: [],
    calendar : [],
    dayById: {},

});



store.subscribe(() =>
    console.log('store', store.getState())
);








export default store;