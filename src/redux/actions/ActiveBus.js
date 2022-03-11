import  { activeBusActionTypes } from "../constants/activeBusActionTypes"

const { UPDATE } = activeBusActionTypes;
export const update = (payload) =>{
    return {
        type: UPDATE,
        payload: payload
    }
}
