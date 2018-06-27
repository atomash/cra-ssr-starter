import axios from 'axios';
import createPromiseThunk from '../lib/createPromiseThunk'; 


export const fetchUser = createPromiseThunk('GET_USER', () => axios.get(`/api/user`)
);

export const fetchProduct = createPromiseThunk('GET_PRODUCT', () => axios.get(`/api/product`)
);
