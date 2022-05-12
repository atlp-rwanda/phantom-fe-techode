import { FETCH_ROUTES, RouteActionType } from "../constants/RouteActionType"
import { UPDATE, CREATE, DELETE, MORE_INFO } from "../constants/RouteActionType";
import axios from "axios"
import Notify from "../../functions/Notify";

export const updateRouteInfo = (payload) => {
    return {
        type: UPDATE,
        payload
    }
}

export const deleteData = (payload) => {
    return {
        type: DELETE,
        payload

    }
}

export const deleteRoute = (payload) => {
    return {
        type: DELETE,
        payload

    }
}

export const  fetchRoutes = (payload) => {
    return { type: FETCH_ROUTES, payload }  
}

export const createRoute = async (payload) => {

    return {
        type: CREATE,
        payload
    }

}