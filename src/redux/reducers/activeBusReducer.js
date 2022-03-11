import  { activeBusActionTypes } from "../constants/activeBusActionTypes"

const { UPDATE } = activeBusActionTypes ;

const initialState = [
        {
            driver: { id:1 , name: 'John Doe'},
            bus: { id:1 , plate: "RAE107D" , lat : 30.21503 , lon: -30.620  }            
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