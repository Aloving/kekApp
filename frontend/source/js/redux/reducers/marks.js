export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'GET_MARKS_START':
            return action.payload;
        case 'GET_MARKS_FINISH':
            return {...action.data};
        case 'ADD_MARK_START':
            return action.payload;
        case 'ADD_MARK_ERROR' :
            console.log(action.error);
            return state;
        case 'ADD_MARK_FINISH' :
            return {
                ...state,
                unDefaults: [
                    ...state.undefaults,
                    ...action.data

                ]
            }


        default:
            return state;
    }
}

