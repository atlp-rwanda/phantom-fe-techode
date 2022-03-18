import  { RouteActionType } from "../constants/RouteActionType"
import { UPDATE , CREATE , DELETE , MORE_INFO } from "../constants/RouteActionType";

export const updateRouteInfo = (payload) =>{
    return {
        type: UPDATE,
        payload
    }
}

export const deleteRoute = (payload) =>{
    console.log(payload)
    return {
        type: DELETE,
        payload
       
    }
}

export const createRoute = (payload) =>{
    return {
        type: CREATE,
        payload
    }
}