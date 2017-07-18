export default function reducer(state = [], action) {
  switch (action.type) {
    case 'UPDATELIST_FINISH':
      var g = state.concat();
      var h = state.findIndex((item) => {
        return item.id == action.dataFront.id;
      });
      g.splice(h, 1, action.data);
      return g;
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
    case 'UPDATE_ITEM_FINISH':
      var g = state.concat();
      var h = g.findIndex((item) => {
        return item.id == action.dataFront.dayId;
      });
      var j = g[h].items.findIndex(item => {
        return item._id == action.dataFront.itemId;
      })
      var newItem = {defaultItem: action.dataFront.defaultItem, _id: action.dataFront.itemId, price: action.dataFront.price, title: action.dataFront.title}
      g[h].items.splice(j, 1, newItem);
      return g;

    case 'GET_DAY_BY_ID_START':
      return [];
    case 'GET_DAY_BY_ID_ERROR':
      return state;
    case'GET_DAY_BY_ID_FINISH':
      var arr = action.data;

      return arr;
    default:
      return state;
  }
}