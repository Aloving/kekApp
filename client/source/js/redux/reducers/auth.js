export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'CREATE_USER_FINISH' :

      return {...state, password: action.data.password, username: action.data.username, id: action.data._id};
    case 'GET_TOKEN_FINISH' :
      return {...state, token: action.data.token};
    case 'GET_TOKEN_ERROR' :

      return {error: true};


    case 'GET_USER_FINISH' :
      return {...state, username: action.data.username, id: action.data._id};
    case 'LOGOUT' :
      return {};
    default:
      return state;


  }
}