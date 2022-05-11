import  { PermissionActionType } from "../constants/permissionActionType"
const {  FETCHING_PERMISSION } = PermissionActionType ;

export const fetchPermissions = (payload) =>{
    return {
        type: FETCHING_PERMISSION,
        payload
    }
}