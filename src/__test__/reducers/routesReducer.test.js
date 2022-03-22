
import { RoutesReducer } from "../../redux/reducers/RoutesReducer";

import { RouteActionType } from "../../redux/constants/RouteActionType";
import { RoutesAction } from "../../redux/actions/RoutesAction";

describe("routes", () => {

    let initialState
  beforeEach(()=>{
    initialState = [
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

  });

  it("should return the initialState for no action", () => {
    const reducer = RoutesReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  
  

});
