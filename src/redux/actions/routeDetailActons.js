
import  { RouteActionDetailType } from "../constants/routeDetailActionTypes"

const { ADD_ROUTE_COORDINATE } = RouteActionDetailType ;

export const addCoordinate = (payload) =>{
    return {
        type: ADD_ROUTE_COORDINATE,
        payload
    }
}
