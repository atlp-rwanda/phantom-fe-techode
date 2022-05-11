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

    const route = {
        name: payload.name,
        code: payload.code,
        city: payload.city,
        startLocation: payload.startLocation,
        endLocation: payload.endLocation,
        duration: payload.duration,
        distance: payload.distance
    }
    try {
        const response = await axios({
            method: "POST",
            url: `http://localhost:5000/api/v1/routes/register`,
            data: route,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "auth-token": `Bearer ${localStorage.getItem("token")}`
            }
        })
        Notify(`${response.data.message}`, "success");
        return {
            type: CREATE,
            payload
        }

    } catch (error) {
        console.log(error)
    }

}