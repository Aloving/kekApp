import {getdays, getmarks, getstat, updatelist, addmark, getcalendar, getdayById, deleteItem, updateItem, createUser, getUser, getToken } from './api';




/* tasks*/

export function action_updatelist(data){
    return {type: 'PROMISE_DATA', promise: updatelist, data: data, actions: ['UPDATELIST_START', 'UPDATELIST_FINISH', 'UPDATELIST_ERROR']};
}
export function action_deleteItem(data){
    return {type: 'PROMISE_DATA', promise: deleteItem, data: data, actions: ['DELETE_ITEM_START', 'DELETE_ITEM_FINISH', 'DELETE_ITEM_ERROR']};
}
export function action_updateItem(data){
    return {type: 'PROMISE_DATA', promise: updateItem, data: data, actions: ['UPDATE_ITEM_START', 'UPDATE_ITEM_FINISH', 'UPDATE_ITEM_ERROR']};
}


/* days */

export function action_getdays(){
    return {type: 'PROMISE', promise: getdays, actions: ['GET_DAYS_START', 'GET_DAYS_FINISH', 'GET_DAYS_ERROR']};
}
export function action_getdayById(id){
    return {type: 'PROMISE_DATA', promise: getdayById, data: id, actions: ['GET_DAY_BY_ID_START', 'GET_DAY_BY_ID_FINISH', 'GET_DAY_BY_ID_ERROR']};
}


/* marks */

export function action_getmarks(){
    return {type: 'PROMISE', promise: getmarks,  actions: ['GET_MARKS_START', 'GET_MARKS_FINISH', 'GET_MARKS_ERROR']};
}

export function action_addmark(title){
    return {type: 'PROMISE_DATA', promise: addmark, data: title, actions: ['ADD_MARK_START', 'ADD_MARK_FINISH', 'ADD_MARK_ERROR']};
}


/* statistic */
export function action_getstat(){
    return {type: 'PROMISE', promise: getstat, actions: ['GET_STAT_START', 'GET_STAT_FINISH', 'GET_STAT_ERROR']};
}

/* calendar */

export function action_getcalendar(){
    return {type: 'PROMISE', promise: getcalendar, actions: ['GET_CALENDAR_START', 'GET_CALENDAR_FINISH', 'GET_CALENDAR_ERROR']};
}


/* auth */


export function action_createUser(data){
  return {type: 'PROMISE_DATA', promise:createUser, data: data, actions: ['CREATE_USER_START', 'CREATE_USER_FINISH', 'CREATE_USER_ERROR']};
}
export function action_getUser(data){
  return {type: 'PROMISE_DATA', promise:getUser, data: data, actions: ['GET_USER_START', 'GET_USER_FINISH', 'GET_USER_ERROR']};
}

export function action_getToken(data){
  return {type: 'PROMISE_DATA', promise:getToken, data: data, actions: ['GET_TOKEN_START', 'GET_TOKEN_FINISH', 'GET_TOKEN_ERROR']};
}

export function action_login(){
  return {type: 'LOGIN'};
}