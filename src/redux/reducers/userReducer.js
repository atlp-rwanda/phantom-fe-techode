import  { userActionTypes } from "../constants/userActionTypes"

const { UPDATE, GET_FIRSTNAME, GET_USERNAME } = userActionTypes;


const initialState = {
    username: '',
    lastname: '',
    email:''
}

export const userReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case GET_USERNAME:
            return state;     
        case GET_FIRSTNAME: 
            const addOne = state.count + 1;            
            return {...state , count:addOne}; 
        case UPDATE: 
            const removeOne = state.count - 1;            
            return {...state , count:removeOne};          
        default:
            return state;
    }
}