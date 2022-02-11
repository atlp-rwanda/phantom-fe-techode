import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";

const reducers =  combineReducers({
    counters :  counterReducer
})

export default reducers;