import { DELETE, CREATE, UPDATE, FETCH_ROUTES } from "../constants/RouteActionType";

const initialState = [
  {
    id: 1,
    name: 'KN',
    code: 120,
    startLocation: 'kabeza',
    endLocation: 'Kicukiro',
    distance: 'km5',
    duration: 'min30',
    city:"Kigali",
    from:{lat: -1.9719517, lng: 30.1317806},
    to:{lat: -1.9719517, lng: 30.1317806}
  }
  
];
export function RoutesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ROUTES:
      let newRoutes = []
      for (let i = 0; i < payload.length; i++) {
        const newBustemplate = {
        id: payload[i].id,
        name:payload[i].name,
        code: payload[i].code,
        startLocation: payload[i].startLocation,
        endLocation: payload[i].endLocation,
        distance: payload[i].distance,
        duration: payload[i].duration,
        city:payload[i].city,
        from:payload[i].from,
        to:payload[i].to
        }
        newRoutes.push(newBustemplate)
      }
      state = newRoutes
      return state
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
