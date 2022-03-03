import  { RoleActions } from "../constants/roleAction"

const { ADD_ROLE,DELETE_PERMISSION, ADD_PERMISSION } = RoleActions ;

const roleState = [
    {
        id:1,
        name:'Admin',
        permissions:[
            { id: 1 , permisionName: 'getBus'},
            { id: 2 , permisionName: 'createRoute'},
            { id: 3 , permisionName: 'getRoute'}
        ]
    }
]

export const rolesReducer = (state = roleState , { type , payload}) =>{
    switch (type) {
        case ADD_ROLE:
            const clonedState = [...state];
            const newRole =  {
                id:state.length + 1,
                name:payload,
                permissions:[]
            }
            clonedState.push(newRole);
            state = clonedState;
            return state;  
        case DELETE_PERMISSION:
            const { roleId , permissionid } = payload;
            const newClonedState = [...state];
            const itemToBeUpdated = newClonedState.filter( currentState => currentState.id == roleId );
            const targetRoleIndex = newClonedState.indexOf(itemToBeUpdated); 
            const newPermission = itemToBeUpdated.permissions.filter(permission => permission.id != permissionid); 

            itemToBeUpdated.permissions = newPermission;
            newClonedState[targetRoleIndex] = itemToBeUpdated;

            state = newClonedState;
            return state;
        case ADD_PERMISSION:
            return state;             
        default:
            return state;
    }
}