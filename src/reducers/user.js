export function UserReduser(state={user:{}}, action){
    switch(action.type){
        case "GET_USER_START":
            return {
                loading: true,
            };
        case "GET_USER_COMPLETED":
            return {
                user: action.payload.data,
                loading: false
            };  
        default:
            return state;
    }
  }
