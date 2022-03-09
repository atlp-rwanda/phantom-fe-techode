import  { RoleActions } from "../constants/roleAction"

const { ADD_ROLE, DELETE_ROLE,DELETE_PERMISSION, ASSIGN_PERMISSION } = RoleActions ;

const roleState = [
    {
        id:1,
        name:'Admin',
        permissions:[
            { id: 1 , permissionName: 'getBus'},
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
            }
            clonedState.push(newRole);
            state = clonedState;
            return state;  
        case DELETE_ROLE:
            const clonedDelState = [...state];
            const newRoles = clonedDelState.filter(current => current.id != payload);
            state = newRoles;
            return state;
        case DELETE_PERMISSION:
            const { Role_Id , permissionId } = payload;
            const newClonedState = [...state];
            const itemToBeUpdated = newClonedState.filter( current => current.id == Role_Id );
            const indexDel = newClonedState.findIndex(current => current.id == Role_Id)
            const deletedPermission = [...itemToBeUpdated[0].permissions];
            const newPermission = deletedPermission.filter(permission => permission.id != permissionId); 
            newClonedState[indexDel].permissions = newPermission;

            state = newClonedState;
            return state;
        case ASSIGN_PERMISSION:
            const {role_Id, assignedPermission} = payload;
            const assignState = [...state];
            const roleToBeUpdated = assignState.filter(current => current.id == role_Id);
            const index = assignState.findIndex(current => current.id == role_Id)
            const updatePermission = [...roleToBeUpdated[0].permissions]
            let assignCounter =  roleToBeUpdated[0].permissions.length;
            assignCounter = assignCounter + 1
            updatePermission.push({
                id: assignCounter,
                permissionName: assignedPermission
            });
            // assignCounter = id
            assignState[index].permissions = updatePermission;
            state =  assignState;
            return state;             
        default:
            return state;
    }
}