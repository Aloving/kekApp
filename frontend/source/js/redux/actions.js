import {getdays} from './api';
import {getmarks} from './api';
import {updatelist} from './api';
import {addmark} from './api';


const UPDATE_LIST = 'UPDATE_LIST' ;
const GET_DAYS = 'GET_DAYS_START';
const GET_MARKS = 'GET_MARKS';
const ADD_MARK = 'ADD_MARK';

export function action_updatelist(data){
    return {type: UPDATE_LIST, promise: updatelist, data};
}

export function action_getdays(){
    return {type: 'PROMISE', promise: getdays, actions: ['GET_DAYS_START', 'GET_DAYS_FINISH', 'GET_DAYS_ERROR']};
}
export function action_getmarks(){
    return {type: 'PROMISE', promise: getmarks,  actions: ['GET_MARKS_START', 'GET_MARKS_FINISH', 'GET_MARKS_ERROR']};
}

export function action_addmark(title){
    return {type: ADD_MARK,promise: addmark, title};
}