

export default function reducer(state = [], action) {
    switch (action.type) {
        case 'GET_DAYS_START':
            return action.payload;
        case 'GET_DAYS_FINISH':
            return [...action.data];
        case 'UPDATELIST_FINISH':
            console.log('REDUCER', action);
            var g = state.concat();
            var h = state.findIndex((item) => {
                return item.id == action.dataFront.id;
            });

            g.splice(h, 1, {...g[h], items: [...g[h].items,  action.dataFront]});

            return g;
        case 'DELETE_ITEM_FINISH':
            console.log(action);
            return state
        default:
            return state;
    }
}


