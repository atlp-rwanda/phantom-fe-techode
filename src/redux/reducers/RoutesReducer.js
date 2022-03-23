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
    city:"Kigali",
    from:{lat: -1.9719517, lng: 30.1317806},
    to:{lat: -1.9719517, lng: 30.1317806}
  },
  {
    id: 2,
    name: 'KK',
    code: 1200,
    startLocation: 'kabeza',
    endLocation: 'Kicukiro',
    distance: 'km5',
    duration: 'min30',
    city:"Kigali",
    from:{lat: -1.9719517, lng: 30.1317806},
    to:{lat: -1.9719517, lng: 30.1317806}
  },
  {
    id: 3,
    name: 'KG',
    code: 1200,
    startLocation: 'kabeza',
    endLocation: 'Kicukiro',
    distance: 'km5',
    duration: 'min30',
    city:"Kigali",
    from:{lat: -1.9719517, lng: 30.1317806},
    to:{lat: -1.9719517, lng: 30.1317806}
  },
  {
    id: 4,
    name: 'KM',
    code: 1200,
    startLocation: 'kabeza',
    endLocation: 'Kicukiro',
    distance: 'km5',
    duration: 'min30',
    city:"Kigali",
    from:{lat: -1.9719517, lng: 30.1317806},
    to:{lat: -1.9719517, lng: 30.1317806}
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
        city:payload.city,
        from:{...payload.from},
        to:{...payload.to}
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
      return state;
  }
}
