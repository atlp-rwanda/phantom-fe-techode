import  { PermissionActionType } from "../constants/permissionActionType"
const { ADD_PERMISSION , FETCHING_PERMISSION  } = PermissionActionType ;

const permissionState = []

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
        case FETCHING_PERMISSION:
            let newState = [...state];
            newState = payload
            state = newState;
            return state;              
        default:
            return state;
    }
}