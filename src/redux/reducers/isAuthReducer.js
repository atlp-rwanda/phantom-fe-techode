import { IsAuthType } from "../constants/isAuthType";

const { IS_AUTH } = IsAuthType;

const initialState = {
    auth: false
}

export const isAuthReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case IS_AUTH:
            localStorage.setItem("Logged", "TRUE")
            return {...state , auth: payload}; 
        default:
            return state;
    }
}