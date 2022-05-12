import  { selectedRouteActionTypes } from "../constants/selectedRouteActionTypes"

const { SET_SELECTED_ROUTE } = selectedRouteActionTypes ;

const initialState = {   
        routeId:0,      
        from:[],
        to:[],
        routecode:0
    }

export const selectedRouteReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case SET_SELECTED_ROUTE:
            const { routeId , from , to,routecode } = payload;
            const select = {
                routeId,
                from,
                to,
                routecode
            }
            const stateClone = {...state};
            stateClone.routeId = select.routeId;
            stateClone.from = select.from;
            stateClone.to = select.to;
            stateClone.routecode = select.routecode;            
            state = stateClone;
            return state;          
        default:
            return state;
    }
}