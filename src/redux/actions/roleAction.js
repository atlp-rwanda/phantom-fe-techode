import  { RoleActions } from "../constants/roleAction"
const { ADD_ROLE, DELETE_ROLE,DELETE_PERMISSION, ASSIGN_PERMISSION , FETCHING_ROLES } = RoleActions ;



export const addRole = (payload) =>{
    return {
        type: ADD_ROLE,
        payload
    }
}
export const fetchRoles = (payload) =>{
    return {
        type: FETCHING_ROLES,
        payload
    }
}
export const deleteRole = (payload) => {
    return {
        type: DELETE_ROLE,
        payload
    }
}

export const deletePermission = (payload) =>{
    return {
        type: DELETE_PERMISSION,
        payload
    }
}

export const assignPermission = (payload) =>{
    return {
        type: ASSIGN_PERMISSION,
        payload
    }
}