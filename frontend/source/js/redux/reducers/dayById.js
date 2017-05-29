

export default function reducer(state = {}, action) {
    switch (action.type) {

        case 'GET_DAY_BY_ID_START':
            return action.payload;
        case 'GET_DAY_BY_ID_ERROR':
            return state;
        case 'GET_DAY_BY_ID_FINISH':

            return action.data;
        case 'UPDATELIST_FINISH':
            return action.data;


        default:
            return state;
    }
}

