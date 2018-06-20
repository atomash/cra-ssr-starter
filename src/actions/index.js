import axios from 'axios';


export const fetchUser = () => (dispatch)=>{
    return axios.get(`http://localhost:4000/api/user`)
            .then((res) => {
                dispatch({
                    type:'CREATE_SESSION',
                    session: {
                        user: res.data
                    }
                })
            })
        // .catch(error => {
        //     console.log(error)
        // });

};

