export function ProductReducer(state={product: {}}, action){
    switch(action.type){
        case "GET_PRODUCT":
            return {
                product: action.payload
            };
        default:
            return state;
    }
}