import  { activeBusActionTypes } from "../constants/activeBusActionTypes"

const { UPDATE_ACTIVE_BUS, START,SPEED_CONTROLLER } = activeBusActionTypes ;

const initialState = [
        {
            driver: { id:1 , name: 'John Doe'},
            bus: { id:1 , plate: "RAE107D" },
            passengers:0,
            location:{lat : 30.21503 , lon: -30.620},
            busStatus:"parked",
            speedStatus:"",
            speed:{ prev: 1 , current:1 }
        }
    ]

export const activeBusReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case UPDATE_ACTIVE_BUS:
            const alightState = [...state];
            const alightToBeUpdated = alightState.filter(alightInfo => alightInfo.driver.id == payload.driverId);
            const indexAlight = alightState.findIndex(alightInfo => alightInfo.driver.id == payload.driverId);
            alightToBeUpdated[0].passengers = Number(alightToBeUpdated[0].passengers) +  (payload.joining - payload.alighting);
            alightToBeUpdated[0].busStatus = "On Board";
            alightState[indexAlight] = alightToBeUpdated[0];
            state = alightState;
            return state;     
        case START:
            const clonedState = [...state];
            const busInfoToUpdate = clonedState.filter(busInfo => busInfo.bus.id = payload.busId );
            const indexToUpdate = clonedState.findIndex(busInfo => busInfo.bus.id = payload.busId );
            
            busInfoToUpdate[0].passengers = payload.passengers;
            
            clonedState[indexToUpdate] = busInfoToUpdate[0];
            clonedState[indexToUpdate].busStatus = "On Board";
            clonedState[indexToUpdate].speedStatus = "Speeding up";
            clonedState[indexToUpdate].speed.prev = 5;
            clonedState[indexToUpdate].speed.current = 5;
            state = clonedState;
            return state;   
        case SPEED_CONTROLLER:
            const cloneState = [...state];
            const newInfo = cloneState.filter(busInfo => busInfo.bus.id = payload.busId );
            const index = cloneState.findIndex(busInfo => busInfo.bus.id = payload.busId );
                  
            cloneState[index] = newInfo[0];
           
            if(cloneState[index].speed.prev <= payload.speed){
                cloneState[index].speedStatus = "Speeding up"
            }
            else{
                if(payload.speed == 0 ){
                    cloneState[index].speedStatus = "stopped"                
                }
                else{
                    cloneState[index].speedStatus = "Slowing down"
                }                                
            }
            cloneState[index].speed.current = payload.speed;
            cloneState[index].speed.prev = payload.speed;
            state = cloneState;
            return state;         
        default:
            return state;
    }
}