import { activeBusReducer } from "../../redux/reducers/activeBusReducer";
import { activeBusActionTypes } from '../../redux/constants/activeBusActionTypes';

describe("Testing => activeBusReducer(state, action)", () => {
    let initialState
    beforeEach(() => {
        initialState = [
            {
                driver: { id:1 , name: 'John Doe'},
                bus: { id:1 , plate: "RAE107D" },
                passengers:0,
                location:{lat : 30.21503 , lon: -30.620},
                busStatus:"parked"
            },
        ];
    });

    it("should return the initialState for no action", () => {
        const reducer = activeBusReducer(undefined, {});
        expect(reducer).toEqual(initialState);
      });





})