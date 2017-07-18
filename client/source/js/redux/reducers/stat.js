
export default function reducer(state = [],action){
    switch (action.type) {
      case 'CLEAR_STAT' :
          return [];
        case 'GET_STAT_FINISH':
            return [...action.data];
        default:
            return state;
    }
}

