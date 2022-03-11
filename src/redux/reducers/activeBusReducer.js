import  { activeBusActionTypes } from "../constants/activeBusActionTypes"

const { UPDATE,START } = activeBusActionTypes ;

const initialState = [
        {
            driver: { id:1 , name: 'John Doe'},
            bus: { id:1 , plate: "RAE107D" },
            passengers:0,
            location:{lat : 30.21503 , lon: -30.620},
            busStatus:"parked"
        }
    ]

export const activeBusReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case UPDATE:
            return state;     
        case START:
            const clonedState = [...state];
            const busInfoToUpdate = clonedState.filter(busInfo => busInfo.bus.id = payload.busId );
            const indexToUpdate = clonedState.findIndex(busInfo => busInfo.bus.id = payload.busId );
            
            busInfoToUpdate[0].passengers = payload.passengers;
            
            clonedState[indexToUpdate] = busInfoToUpdate[0];
            clonedState[indexToUpdate].busStatus = "On board";
            console.log(busInfoToUpdate);
            state = clonedState;
            return state;         
        default:
            return state;
    }
}