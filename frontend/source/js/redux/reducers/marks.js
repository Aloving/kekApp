export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'GET_MARKS_START':
            return action.payload;
        case 'GET_MARKS_FINISH':
            return {...action.data};
        case 'ADD_MARK' :
            return {
                ...state,
                unDefaults:
            [
                ...state.undefaults,
                {
                    title: action.title
                }
            ]
        }


        default:
            return state;
    }
}

