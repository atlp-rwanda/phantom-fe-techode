import  { selectedRouteActionTypes } from "../constants/selectedRouteActionTypes"

const { SET_SELECTED_ROUTE } = selectedRouteActionTypes ;

const initialState = {   
        routeId:0,      
        from:[],
        to:[]
    }

export const selectedRouteReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case SET_SELECTED_ROUTE:
            const { routeId , from , to } = payload;
            const select = {
                routeId,
                from,
                to
            }
            const stateClone = {...state};
            stateClone.routeId = select.routeId;
            stateClone.from = select.from;
            stateClone.to = select.to;
            
            state = stateClone;
            return state;          
        default:
            return state;
    }
}