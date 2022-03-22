import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { rolesReducer } from "./rolesReducer";
import { permissionsReducer } from "./permissionsReducer";
import { userReducer } from "./userReducer"; 
import { busesReducer } from "./busesReducer";

import { assignBusReducer } from "./assignBusReducer"

const reducers =  combineReducers({
    counters :  counterReducer,
    roles: rolesReducer,
    permissions: permissionsReducer,
    user: userReducer,
    buses: busesReducer
    driverBusAssignment: assignBusReducer
})

export default reducers;