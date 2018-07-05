import { combineReducers } from "redux";
import { ProductReducer } from './product';
import {  UserReduser } from './user';

const rootReducer = combineReducers({
  pr: ProductReducer,
  ur: UserReduser
});

export default rootReducer;