export function ProductReducer(state={product: {}}, action){
  switch(action.type){
      case "GET_PRODUCT_COMPLETED":
          return {
              product: action.payload.data
          };
      default:
          return state;
  }
}