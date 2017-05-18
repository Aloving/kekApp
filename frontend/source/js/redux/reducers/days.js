import store from './../store';

export default function reducer(state = [],action){
    switch (action.type) {
    case 'GET_DAYS_START':
        return action.payload;
    case 'GET_DAYS_FINISH':
        return [...action.data];
    default:
        return state;
    }
}


