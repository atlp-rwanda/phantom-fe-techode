import { DELETE, CREATE, UPDATE } from "../constants/RouteActionType";

const initialState = [
  {
    id: 1,
    name: 'KN',
    code: 1200,
    startLocation: 'kabeza',
    endLocation: 'Kicukiro',
    distance: 'km5',
    duration: 'min30',
  },
  {
    id: 2,
    name: 'KK',
    code: 1200,
    startLocation: 'kabeza',
    endLocation: 'Kicukiro',
    distance: 'km5',
    duration: 'min30',
  },
  {
    id: 3,
    name: 'KG',
    code: 1200,
    startLocation: 'kabeza',
    endLocation: 'Kicukiro',
    distance: 'km5',
    duration: 'min30',
  },
  {
    id: 4,
    name: 'KM',
    code: 1200,
    startLocation: 'kabeza',
    endLocation: 'Kicukiro',
    distance: 'km5',
    duration: 'min30',
  },
  
];
export function RoutesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DELETE:
      const { routeId } = payload;
      const clonedRemoveState = [...state];
      const itemToBeDeleted = clonedRemoveState.filter(
        (route) => route.id != routeId
      );

      state = itemToBeDeleted;

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
      const indexTobeUpdated = cloneState.findIndex(
        (route) => route.id == payload.id
      );

      cloneState[indexTobeUpdated] = payload;
      state = cloneState;

      return state;
    default:
      console.log(payload, type);
      return state;
  }
}