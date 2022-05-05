import  { RouteActionDetailType } from "../constants/routeDetailActionTypes"

const { ADD_ROUTE_COORDINATE } = RouteActionDetailType ;

const initialState =[]

export const RouteDetailReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case ADD_ROUTE_COORDINATE:
            let newState = [...state];
            newState = []
            newState = payload;
            state = newState;
            return state;          
        default:
            return state;
    }
}