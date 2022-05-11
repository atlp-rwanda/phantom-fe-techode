import { assignBusActionType } from '../constants/assignBusActionTypes'

export const assignBus = (payload) => {
    return {
        type: assignBusActionType.ASSIGN_BUS,
        payload
    }
}
export const removeBus = (payload) => {
    return {
        type: assignBusActionType.REMOVE_BUS,
        payload
    }
}