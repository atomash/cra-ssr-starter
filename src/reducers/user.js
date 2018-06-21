export function UserReduser(state={user:{}}, action){
  switch(action.type){
      case "GET_USER":
          return {
              user: action.payload,
          };
      default:
          return state;
  }
}