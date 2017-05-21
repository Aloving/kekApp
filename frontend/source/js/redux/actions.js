import {getdays} from './api';
import {getmarks} from './api';
import {updatelist} from './api';
import {addmark} from './api';


export function action_updatelist(data){
    return {type: 'PROMISE_DATA', promise: updatelist, data: data, actions: ['UPDATELIST_START', 'UPDATELIST_FINISH', 'UPDATELIST_ERROR']};
}

export function action_getdays(){
    return {type: 'PROMISE', promise: getdays, actions: ['GET_DAYS_START', 'GET_DAYS_FINISH', 'GET_DAYS_ERROR']};
}
export function action_getmarks(){
    return {type: 'PROMISE', promise: getmarks,  actions: ['GET_MARKS_START', 'GET_MARKS_FINISH', 'GET_MARKS_ERROR']};
}

export function action_addmark(title){
    return {type: 'PROMISE_DATA', promise: addmark, data: title, actions: ['ADD_MARK_START', 'ADD_MARK_FINISH', 'ADD_MARK_ERROR']};
}