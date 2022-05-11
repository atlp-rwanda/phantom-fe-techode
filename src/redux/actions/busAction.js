import { UPDATE , CREATE , DELETE , FETCH_BUSES } from "../constants/busActionType";

export const updateBusInfo = (payload) =>{
    return {
        type: UPDATE,
        payload
    }
}

export const deleteBus = (payload) =>{
    return {
        type: DELETE,
        payload
    }
}

export const createBus = (payload) =>{
    return {
        type: CREATE,
        payload
    }
}
export const fetchBuses = (payload) =>{
    return {
        type: FETCH_BUSES,
        payload
    }
}