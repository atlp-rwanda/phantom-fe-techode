import { DELETE, CREATE, UPDATE } from "../constants/RouteActionType";

const initialState = [];
export function RoutesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE:
        const {routeId}  = payload
        const clonedRemoveState = [...state];
        const itemToBeDeleted = clonedRemoveState.filter(route => route.id != routeId);

        state = itemToBeDeleted;
        console.log(payload)
       
        return state;

    case CREATE:
      const clonedState = [...state];
      const newRoute = {
        id: state.length + 1,
        name: payload.name,
        code: payload.code,
        startLocation: payload.startLocation,
        endLocation: payload.endLocation,
        distance: payload.distance,
        duration: payload.duration,
      };
      clonedState.push(newRoute);
      state = clonedState;
     

    case UPDATE:
      const cloneState = [...state];
      const indexTobeUpdated = cloneState.findIndex(route => route.id == payload.id);

      cloneState[indexTobeUpdated] = payload;
      state = cloneState;

      return state;
    default:
        console.log(payload, type)
      return state;
  }
}
