import store from './../store';

export default function reducer(state = [],action){
    switch (action.type) {
    case 'GET_DAYS_START':
        return action.payload;
    case 'GET_DAYS_FINISH':
        return [...action.data];
    case 'UPDATELIST_FINISH':
    var g = state.concat();
    var h = state.findIndex((item)=>{
    		return item.id == action.data.id;	
    });
    g.splice(h, 1, action.data);

    			return g;
    default:
        return state;
    }
}


