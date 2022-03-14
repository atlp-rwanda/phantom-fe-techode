import { UPDATE , CREATE , DELETE , MORE_INFO } from "../constants/busActionType";

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