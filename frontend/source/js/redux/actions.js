import {getdays} from './api';
import {getmarks} from './api';
import {getstat} from './api';
import {updatelist} from './api';
import {addmark} from './api';
import {getcalendar} from './api';
import {getdayById} from './api';


export function action_updatelist(data){
    return {type: 'PROMISE_DATA', promise: updatelist, data: data, actions: ['UPDATELIST_START', 'UPDATELIST_FINISH', 'UPDATELIST_ERROR']};
}

export function action_getdays(){
    return {type: 'PROMISE', promise: getdays, actions: ['GET_DAYS_START', 'GET_DAYS_FINISH', 'GET_DAYS_ERROR']};
}
export function action_getdayById(id){
    return {type: 'PROMISE_DATA', promise: getdayById, data: id, actions: ['GET_DAY_BY_ID_START', 'GET_DAY_BY_ID_FINISH', 'GET_DAY_BY_ID_ERROR']};
}
export function action_getmarks(){
    return {type: 'PROMISE', promise: getmarks,  actions: ['GET_MARKS_START', 'GET_MARKS_FINISH', 'GET_MARKS_ERROR']};
}

export function action_addmark(title){
    return {type: 'PROMISE_DATA', promise: addmark, data: title, actions: ['ADD_MARK_START', 'ADD_MARK_FINISH', 'ADD_MARK_ERROR']};
}

export function action_getstat(){
    return {type: 'PROMISE', promise: getstat, actions: ['GET_STAT_START', 'GET_STAT_FINISH', 'GET_STAT_ERROR']};
}

export function action_getcalendar(){
    return {type: 'PROMISE', promise: getcalendar, actions: ['GET_CALENDAR_START', 'GET_CALENDAR_FINISH', 'GET_CALENDAR_ERROR']};
}
