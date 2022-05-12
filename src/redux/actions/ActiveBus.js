import  { activeBusActionTypes } from "../constants/activeBusActionTypes"

const { UPDATE_ACTIVE_BUS, START,SPEED_CONTROLLER } = activeBusActionTypes ;

export const updateActiveBus = (payload) =>{
    return {
        type: "UPDATE_ACTIVE_BUS",
        payload
    }
}

export const start = (payload) => {
    return {
        type: "START",
        payload
    }
}

export const speedControl = (payload) => {
    return {
        type: "SPEED_CONTROLLER",
        payload
    }
}



export const activateDriver = (payload) => {
    return {
        type: "ACTIVATE_DRIVERS",
        payload
    }
}
