
export default function reducer(state = [],action){
    switch (action.type) {
        // case 'GET_STAT_START':
        //     return action.payload;
        case 'GET_STAT_FINISH':
            return [...action.data];
        default:
            return state;
    }
}

