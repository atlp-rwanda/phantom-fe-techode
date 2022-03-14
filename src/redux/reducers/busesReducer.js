
import { DELETE , CREATE, UPDATE  } from "../constants/busActionType";


const initialState = [
    {
        id: 1,
        busType: "Yutong",
        route: 401,
        plate: "RAF102F"
    }
];
export  function busesReducer(state = initialState ,  { type , payload }){

    switch(type){
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
                busType: payload.busType,
                route: payload.route,
                plate: payload.plate
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