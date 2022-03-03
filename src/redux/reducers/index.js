import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { rolesReducer } from "./rolesReducer";
import { permissionsReducer } from "./permissionsReducer";

const reducers =  combineReducers({
    counters :  counterReducer,
    roles: rolesReducer,
    permissions: permissionsReducer
})

export default reducers;