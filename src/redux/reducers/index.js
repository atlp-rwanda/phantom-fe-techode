import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { userReducer } from "./userReducer"; 

const reducers =  combineReducers({
    counters :  counterReducer,
    user: userReducer
})

export default reducers;