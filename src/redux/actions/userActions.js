import  { userActionTypes } from "../constants/userActionTypes"

const { UPDATE, GET_FIRSTNAME, GET_USERNAME, GET_LASTNAME ,SET_PROFILE } = userActionTypes;
export const update = (payload) =>{
    return {
        type: UPDATE,
        payload: payload
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

export const getLastname = () =>{
    return {
        type: GET_LASTNAME
    }
}


export const setProfile = (payload) =>{
    return {
        type: SET_PROFILE,
        payload
    }
}