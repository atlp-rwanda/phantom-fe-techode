import { notificationActionType } from "../constants/notificationActionTypes"

export const addNotification = (payload) => {
    return {
        type: notificationActionType.ADD_NOTIFICATION,
        payload
    }
}
export const removeNotification = (payload) => {
    return {
        type: notificationActionType.REMOVE_NOTIFICATION,
        payload
    }
}