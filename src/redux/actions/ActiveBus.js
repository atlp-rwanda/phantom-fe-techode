import  { activeBusActionTypes } from "../constants/activeBusActionTypes"

const { UPDATE ,START } = activeBusActionTypes;

export const update = (payload) =>{
    return {
        type: UPDATE,
        payload
    }
}

export const start = (payload) => {
    return {
        type: START,
        payload
    }
}
