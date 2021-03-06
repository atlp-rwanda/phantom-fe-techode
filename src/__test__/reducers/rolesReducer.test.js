import { rolesReducer } from "../../redux/reducers/rolesReducer";
import { RoleActions } from "../../redux/constants/roleAction";

describe("Testing => rolesReducer(state, action)", () => {

let initialState
  beforeEach(()=>{
    initialState = [
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

  });

  it("should return the initialState for no action.", () => {
    const reducer = rolesReducer(undefined, {
      id: 1,
      rolename: 'Admin',
      permissions: [
          {
              id: 1,
              permssionName: 'getBus'
          }
      ]
  });
    expect(reducer).toEqual(initialState);
  });

  it("should accept the addition of new role.", () => {
    const state = [
      {
        id: 1,
        rolename: 'Admin',
        permissions: [
            {
                id: 1,
                permssionName: 'getBus'
            }
        ]
    },
    {
      id:2,
      rolename:"Driver",
      permissions:[]
    }
    ];

    const newRole = "Driver";
      const reducer = rolesReducer(undefined, {
      type: RoleActions.ADD_ROLE,
      payload: newRole
    });
    expect(JSON.stringify(reducer)).toEqual(JSON.stringify(state));
  });

  it("should accept the addition of new role.", () => {
    const state = [
      {
        id: 1,
        rolename: 'Admin',
        permissions: [
            {
                id: 1,
                permssionName: 'getBus'
            }
        ]
    },
    {
      id: 2,
      rolename: 'Operator',
      permissions:[]
    }
    ];

    const newRole = "Operator";
      const reducer = rolesReducer(undefined, {
      type: RoleActions.ADD_ROLE,
      payload: newRole,
    });
    expect(JSON.stringify(reducer)).toEqual(JSON.stringify(state));
  });

  it("should accept the addition of new role.", () => {
    const state = [
      {
        id: 1,
        rolename: 'Admin',
        permissions: [
            {
                id: 1,
                permssionName: 'getBus'
            }
        ]
    },
    {
      id: 2,
      rolename: 'Operator',
      permissions:[]
    }
    ];

    const newRole = "Operator";
      const reducer = rolesReducer(undefined, {
      type: RoleActions.ADD_ROLE,
      payload: newRole,
    });
    expect(JSON.stringify(reducer)).toEqual(JSON.stringify(state));
  });

  it("should accept the deletion of role", () => {


    const reducer = rolesReducer(initialState, {
      type: RoleActions.DELETE_ROLE,
      payload: 1,
    });
    expect(reducer).toEqual([]);
  });

it("should accept the deletion of permission", () => {

    const state = [
      {
        id: 1,
        rolename: 'Admin',
        permissions: []
    }
  ];

    const reducer = rolesReducer(initialState, {
      type: RoleActions.DELETE_PERMISSION,
      payload:  { Role_Id: 1, permissionId: 1 },
    });
    expect(reducer).toEqual(state);
  });

  it("should accept the deletion of permission", () => {

    const state = [
      {
        id: 1,
        rolename: 'Admin',
        permissions: [
            {
                id: 1,
                permssionName: 'getBus'
            },
            {
              id: 2,
              permissionName: 'GetRoute'
          }
        ]
    }
  ];

    const reducer = rolesReducer(initialState, {
      type: RoleActions.ASSIGN_PERMISSION,
      payload:  {role_Id: 1, assignedPermission: "GetRoute"},
    });
    expect(reducer).toEqual(state);
  });

});