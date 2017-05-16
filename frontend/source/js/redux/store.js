import { createStore } from 'redux';
import {getdays} from './api';




function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'GETDAYS':
             getdays().then( (data) => {return data});
        default:
            return state
    }
}
let store = createStore(counter)

store.subscribe(() =>
    console.log('store',  store.getState())
)

export default store;