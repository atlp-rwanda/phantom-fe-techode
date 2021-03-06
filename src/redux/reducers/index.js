import { isAuthReducer } from "./isAuthReducer";
import { rolesReducer } from "./rolesReducer";
import { permissionsReducer } from "./permissionsReducer";
import { userReducer, usersReducer } from "./userReducer"; 
import { busesReducer } from "./busesReducer";
import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { activeBusReducer } from "./activeBusReducer";
import { selectedRouteReducer } from "./SelectedRouteReducer";
import { assignBusReducer } from "./assignBusReducer"
import { RoutesReducer } from "./RoutesReducer";
import { assignRouteBusReducer } from "./assignRouteReducer"
import { addNotificationReducer } from "./notificationReducer";
import {forgotPasswordReducer} from "./forgotPasswordReducer";
import { resetPasswordReducer } from "./resetPasswordReducer";
import { RouteDetailReducer } from "./RouteDetailReducer";

const reducers =  combineReducers({
    counters :  counterReducer,
    authentication: isAuthReducer,
    roles: rolesReducer,
    permissions: permissionsReducer,
    user: userReducer,
    users: usersReducer,
    driverBusAssignment: assignBusReducer,
    routes: RoutesReducer,
    buses: busesReducer,
    activeBus: activeBusReducer,
    selectedRoute: selectedRouteReducer,
    driverBusAssignment: assignBusReducer,
    notifications: addNotificationReducer,
    forgotPass:forgotPasswordReducer,
    resetPass:resetPasswordReducer,
    routeCoordinate:RouteDetailReducer,
    assignBusRoute: assignRouteBusReducer
})

export default reducers;