

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

  case 'DELETE_ITEM_FINISH':

            var g = state.concat();
            var h = g.findIndex((item) => {
                return item.id == action.dataFront.dayId;
            });

            var j = g[h].items.filter(item => {
                return item._id != action.dataFront.itemId;
            })

            var k = {...g[h], items: j};
            g.splice(h, 1, k)

            return g

        default:
            return state;
    }
}

