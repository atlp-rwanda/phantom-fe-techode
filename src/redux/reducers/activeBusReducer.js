import  { activeBusActionTypes } from "../constants/activeBusActionTypes"

const { UPDATE } = activeBusActionTypes ;

const initialState = [
        {
            count: 0
        }
    ]

export const activeBusReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case UPDATE:
            return state;     
        default:
            return state;
    }
}