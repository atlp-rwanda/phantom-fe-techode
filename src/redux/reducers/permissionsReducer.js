import  { PermissionActionType } from "../constants/permissionActionType"
const { ADD_PERMISSION } = PermissionActionType ;

const permissionState = [
    {
        id:1,
        name:'Get routes',
    }
]

export const permissionsReducer = (state = permissionState, { type , payload}) =>{
    switch (type) { 
        case ADD_PERMISSION:
            const clonedState = [...state];
            const newPermission = {
                id:state.length + 1,
                name: payload
            }
            clonedState.push(newPermission);
            state = clonedState;
            return state;             
        default:
            return state;
    }
}