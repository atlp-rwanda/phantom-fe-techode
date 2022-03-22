import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { rolesReducer } from "./rolesReducer";
import { permissionsReducer } from "./permissionsReducer";
import { userReducer } from "./userReducer"; 
import { busesReducer } from "./busesReducer";

import { activeBusReducer } from "./activeBusReducer";
import { selectedRouteReducer } from "./SelectedRouteReducer";
import { assignBusReducer } from "./assignBusReducer"
import { addNotificationReducer } from "./notificationReducer"

const reducers =  combineReducers({
    counters :  counterReducer,
    roles: rolesReducer,
    permissions: permissionsReducer,
    user: userReducer,
    buses: busesReducer,
    activeBus: activeBusReducer,
    selectedRoute: selectedRouteReducer,
    driverBusAssignment: assignBusReducer,
    notifications: addNotificationReducer,
})

export default reducers;