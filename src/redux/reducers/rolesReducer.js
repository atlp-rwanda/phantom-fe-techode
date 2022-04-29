import  { RoleActions } from "../constants/roleAction"

const { ADD_ROLE, DELETE_ROLE,DELETE_PERMISSION, ASSIGN_PERMISSION,FETCHING_ROLES  } = RoleActions ;

const roleState = [
    {
        id: 1,
        rolename: 'Admin',
        permissions: [
            {
                id: 1,
                permssionName: 'getBus'
            }
        ]
    }
]

export const rolesReducer = (state = roleState , { type , payload}) =>{
    switch (type) {
        case FETCHING_ROLES:
            /* state twin */ 
            let newRoleSet = [];
            for (let i = 0; i < payload.length; i++) {  
                let permisionId = 1 ; 
                /* newRole templete  */ 
                const newRoleSetTemplete = {
                    id :  payload[i].id,
                    rolename: payload[i].rolename,
                    permissions:[]
                }
                /* splitting permission list  */
                if (payload[i].permissions != null) {
                    const rolePermissionSet = payload[i].permissions.split(",");
                    if (rolePermissionSet.length > 0 ) {
                        for (let j = 0; j < rolePermissionSet.length; j++) {
                            /* role permssion templete  */ 
                            const rolePermission = {
                                id : permisionId,
                                permissionName: rolePermissionSet[j]
                            }   
                            /* update state twin */ 
                            newRoleSetTemplete.permissions.push(rolePermission);
                            permisionId++;              
                        }
                    }
                }                
                newRoleSet.push(newRoleSetTemplete);
            }            
            state = newRoleSet;
            return state;  
        case ADD_ROLE:
            const clonedState = [...state];
            const newRole =  {
                id:state.length + 1,
                rolename:payload,
                permissions:[]
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
            const {role_Id : id, assignedPermission} = payload;
            const assignState = [...state];
            const roleToBeUpdated = assignState.filter(current => current.id == id);
            const index = assignState.findIndex(current => current.id == id)
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