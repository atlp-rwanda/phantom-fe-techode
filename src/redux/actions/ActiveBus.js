import  { activeBusActionTypes } from "../constants/activeBusActionTypes"

const { UPDATE_ACTIVE_BUS ,START } = activeBusActionTypes;

export const updateActiveBus = (payload) =>{
    return {
        type: UPDATE_ACTIVE_BUS,
        payload
    }
}

export const start = (payload) => {
    return {
        type: START,
        payload
    }
}
