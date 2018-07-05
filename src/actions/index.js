import axios from 'axios';
import * as actionTypes from './actionTypes';
import PromiseThunk from '../lib/createPromiseThunk'; 

export const fetchUser = PromiseThunk(
    actionTypes.GET_USER, () => axios.get(`/api/user`)
);

export const fetchProduct = PromiseThunk(
    actionTypes.GET_PRODUCT, () => axios.get(`/api/product`)
);