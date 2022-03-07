import  { PermissionActionType } from "../constants/permissionActionType"
const { ADD_PERMISSION } = PermissionActionType ;


export const addPermission = (payload) =>{
    return {
        type: ADD_PERMISSION,
        payload
    }
}