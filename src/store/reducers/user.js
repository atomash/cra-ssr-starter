import * as actionTypes from '../../actions/actionTypes';

export function UserReduser(state={user:{}}, action){
    switch(action.type){
        case `${actionTypes.GET_USER}_START`:
            return {
                user: {},
                loading: true,
            };
        case `${actionTypes.GET_USER}_COMPLETED`:
            return {
                user: action.payload.data,
                loading: false
            };  
        default:
            return state;
    }
}