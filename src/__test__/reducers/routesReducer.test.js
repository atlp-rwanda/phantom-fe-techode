
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
        code: 120,
        startLocation: 'kabeza',
        endLocation: 'Kicukiro',
        distance: 'km5',
        duration: 'min30',
        city:"Kigali",
        from:{lat: -1.9719517, lng: 30.1317806},
        to:{lat: -1.9719517, lng: 30.1317806}
      },
      
    ];

  });

  it("should return the initialState for no action", () => {
    const reducer = RoutesReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  
  

});
