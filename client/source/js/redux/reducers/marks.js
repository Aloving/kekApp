export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_MARKS_START':
      return action.payload;
    case 'GET_MARKS_FINISH':
      return {...action.data};
    case 'ADD_MARK_START':
      return state;
    case 'ADD_MARK_ERROR' :
      console.log(action.error);
      return state;
    case 'ADD_MARK_FINISH' :
      console.log('REDUCER', action.data)
      var res = {}
      action.data.defaultItem ?
        res = {
          ...state,
          defaults: [
            ...state.defaults,
            action.data
          ]
        }
        :
        res = {
          ...state,
          unDefaults: [
            ...state.unDefaults,
            action.data
          ]

        };
      return res;

    default:
      return state;
  }
}
