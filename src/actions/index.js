import axios from 'axios';


export const fetchUser = () => (dispatch)=>{
    return axios.get(`http://localhost:4000/api/user`)
            .then((res) => {
                dispatch({type:"GET_USER", payload:res.data})
            })
};

export const fetchProduct = () => (dispatch)=>{
    return axios.get(`http://localhost:4000/api/product`)
            .then((res) => {
                dispatch({type:"GET_PRODUCT", payload:res.data})
            })
};