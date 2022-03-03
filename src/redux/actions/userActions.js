import  { userActionTypes } from "../constants/userActionTypes"

const { UPDATE, GET_FIRSTNAME, GET_USERNAME } = userActionTypes;
export const update = (count) =>{
    return {
        type: UPDATE,
        payload: count
    }
}


export const getUsername = () =>{
    return {
        type: GET_USERNAME
    }
}


export const getFirstname = () =>{
    return {
        type: GET_FIRSTNAME
    }
}