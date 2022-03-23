import  { selectedRouteActionTypes } from "../constants/selectedRouteActionTypes"

const { SET_SELECTED_ROUTE } = selectedRouteActionTypes ;

export const selectRoute = (payload) =>{
    return {
        type: SET_SELECTED_ROUTE,
        payload
    }
}