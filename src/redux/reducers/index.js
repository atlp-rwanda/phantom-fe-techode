import { isAuthReducer } from "./isAuthReducer";
import { rolesReducer } from "./rolesReducer";
import { permissionsReducer } from "./permissionsReducer";
import { userReducer } from "./userReducer"; 
import { busesReducer } from "./busesReducer";
import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { activeBusReducer } from "./activeBusReducer";
import { selectedRouteReducer } from "./SelectedRouteReducer";
import { assignBusReducer } from "./assignBusReducer"
import { RoutesReducer } from "./RoutesReducer";
import { addNotificationReducer } from "./notificationReducer";

const reducers =  combineReducers({
    counters :  counterReducer,
    authentication: isAuthReducer,
    roles: rolesReducer,
    permissions: permissionsReducer,
    user: userReducer,
    driverBusAssignment: assignBusReducer,
    routes: RoutesReducer,
    buses: busesReducer,
    activeBus: activeBusReducer,
    selectedRoute: selectedRouteReducer,
    driverBusAssignment: assignBusReducer,
    notifications: addNotificationReducer,
})

export default reducers;