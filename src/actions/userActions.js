import {GET_USERS, USERS_ERROR} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        
        const res = await axios.get(`http://127.0.0.1:8080/tutorials`)
        console.log(res);
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const savetask = (name) => async dispatch => {
    
    try{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
          }
        console.log("I am IN");
        const res = await axios.post('http://127.0.0.1:8080/addBook', {
            task: name,
            status: '1'
          },{headers: headers})
        console.log(res);
    }
    catch(e){
       
    }

}