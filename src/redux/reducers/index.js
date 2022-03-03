import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { rolesReducer } from "./rolesReducer";

const reducers =  combineReducers({
    counters :  counterReducer,
    roles: rolesReducer
})

export default reducers;