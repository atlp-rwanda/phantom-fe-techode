import  { RoleActions } from "../constants/roleAction"
const { ADD_ROLE,DELETE_PERMISSION, ADD_PERMISSION } = RoleActions ;



export const addRole = (payload) =>{
    return {
        type: ADD_ROLE,
        payload
    }
}
export const deletePermission = (payload) =>{
    return {
        type: DELETE_PERMISSION,
        payload
    }
}

export const addPermission = (payload) =>{
    return {
        type: ADD_PERMISSION,
        payload
    }
}