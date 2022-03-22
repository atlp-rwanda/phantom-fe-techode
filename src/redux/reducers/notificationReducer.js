import { notificationActionType } from '../constants/notificationActionTypes'

const notificationState = [
    {
        id: 1,
        message: "you have sent an email"
    }
]

export const addNotificationReducer = ( state = notificationState, {type, payload}) => {
    switch(type){
        case notificationActionType.ADD_NOTIFICATION:
            const clonedState = [...state]
            const newNotification ={
                id: state.length + 1,
                message: payload,
               }
               
            clonedState.push(newNotification)
            state = clonedState
            return state
        
        case notificationActionType.REMOVE_NOTIFICATION:
            const clonedDelState = [...state]
            const newNotificationDel = clonedDelState.filter( current => current.id != payload) 
            state = newNotificationDel
            return state
        default: 
            return state
    }
}