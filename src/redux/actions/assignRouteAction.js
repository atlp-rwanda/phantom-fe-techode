import { assignRouteActionType } from '../constants/assignRouteActionTypes'

export const assignRoute = (payload) => {
    return {
        type: assignRouteActionType.ASSIGN_ROUTE,
        payload
    }
}
export const removeRoute = (payload) => {
    return {
        type: assignRouteActionType.REMOVE_ROUTE,
        payload
    }
}
