import {getdays} from './api';
import {getmarks} from './api';
import {updatelist} from './api';
import {addmark} from './api';


const UPDATE_LIST = 'UPDATE_LIST' ;
const GET_DAYS = 'GET_DAYS';
const GET_MARKS = 'GET_MARKS';
const ADD_MARK = 'ADD_MARK';

export function action_updatelist(data){
    return {type: UPDATE_LIST, promise: updatelist, data};
}

export function action_getdays(){
    return {type: GET_DAYS, promise: getdays};
}
export function action_getmarks(){
    return {type: GET_MARKS, promise: getmarks};
}

export function action_addmark(title){
    return {type: ADD_MARK,promise: addmark, title};
}