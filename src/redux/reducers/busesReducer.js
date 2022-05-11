
import { DELETE , CREATE, UPDATE, FETCH_BUSES  } from "../constants/busActionType";


const initialState = [
    {
        id: 1,
        bustype: "Yutong",
        routecode: 401,
        platenumber: "RAF102F"
    }
];
export  function busesReducer(state = initialState ,  { type , payload }){

    switch(type){
        case FETCH_BUSES:
            let newBuses = [];
            for(let i = 0; i < payload.length; i++){
                const newBusSetTemplete = {
                    id :  payload[i].id,
                    bustype: payload[i].bustype,
                    routecode:payload[i].routecode,
                    platenumber: payload[i].platenumber,
                }
                newBuses.push(newBusSetTemplete);
            }
            state = newBuses;
            return state
        case DELETE:
            const { busId } = payload
            const clonedRemoveState = [...state];
            const itemToBeDeleted = clonedRemoveState.filter(bus => bus.id != busId);

            state = itemToBeDeleted;
            return state;

        case CREATE:
            const clonedState = [...state];
            const newBus = {
                id: state.length + 1,
                bustype: payload.bustype,
                routecode: payload.routecode,
                platenumber: payload.platenumber
            }
            clonedState.push(newBus);
            state = clonedState;
            
        case UPDATE:    
            const cloneState = [...state];
            const indexTobeUpdated = cloneState.findIndex(bus => bus.id == payload.id);

            cloneState[indexTobeUpdated] = payload;
            state = cloneState;

            return state;
        default:
            return state;     
    }
}