
export default function reducer(state = [],action){
    switch (action.type) {
        case 'GET_CALENDAR_START':
            return action.payload;
        case 'GET_CALENDAR_FINISH':
            return [...action.data];

        default:
            return state;
    }
}


