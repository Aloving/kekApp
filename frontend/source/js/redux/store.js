import {createStore} from 'redux';

import {action_addmark} from './actions';
import {action_getdays} from './actions';
import {addmark} from './api';

const initialState = {
    days: [],
    marks: []
};

function counter(state = initialState, action) {
    switch (action.type) {
    case 'GET_MARKS':
        return {...state, ...{marks : action.data}};
    case 'GET_DAYS':
        return {...state, ...{days : action.data}};
    case 'ADD_MARK' :
        return {...state, ...{marks: [
            ...state.marks,
            {
                title: action.title
            }
        ]}};


    default:
        return state;
    }
}
let store = createStore(counter);

store.subscribe(() =>
    console.log('store', store.getState())
);

function middleware(action){
    return action.promise().then( (data) => store.dispatch({
        type: action.type,
        data: data
    }));
}

export const middle_getdays = middleware(action_getdays());





export default store;