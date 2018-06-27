import axios from 'axios';
import * as actionTypes from './actionTypes';
import createPromiseThunk from '../lib/createPromiseThunk'; 


export const fetchUser = createPromiseThunk(actionTypes.GET_USER, () => axios.get(`/api/user`)
);

export const fetchProduct = createPromiseThunk(actionTypes.GET_PRODUCT, () => axios.get(`/api/product`)
);
