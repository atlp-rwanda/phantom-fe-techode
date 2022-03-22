import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { rolesReducer } from "./rolesReducer";
import { permissionsReducer } from "./permissionsReducer";
import { userReducer } from "./userReducer"; 
import { activeBusReducer } from "./activeBusReducer";
import { selectedRouteReducer } from "./SelectedRouteReducer";
import { assignBusReducer } from "./assignBusReducer"

const reducers =  combineReducers({
    counters :  counterReducer,
    roles: rolesReducer,
    permissions: permissionsReducer,
    user: userReducer,
    activeBus: activeBusReducer,
    selectedRoute: selectedRouteReducer,
    driverBusAssignment: assignBusReducer
})

export default reducers;