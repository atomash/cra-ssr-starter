import * as actionTypes from '../actions/actionTypes';

export function ProductReducer(state={product: {}}, action){
  switch(action.type){
      case `${actionTypes.GET_PRODUCT}_COMPLETED`:
          return {
              product: action.payload.data
          };
      default:
          return state;
  }
}