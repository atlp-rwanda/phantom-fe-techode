import { start } from "../../redux/actions/ActiveBus" 
import { testStore } from "../../utls/testStore";

describe("Testing => activeBusReducer(state, action)", () => {
    let state
    let store
    beforeEach(() => {
        state = [
            {
                driver: { id:1 , name: 'John Doe'},
                bus: { id:1 , plate: "RAE107D" },
                passengers:0,
                location:{lat : 30.21503 , lon: -30.620},
                busStatus:"parked"
            },
        ];
        store = testStore();
    });

    it("should return the initialState for no action", () => {
        const activeBusState = store.getState().activeBus;
        expect(activeBusState).toEqual(state);
    });
    it("On start bus should return onrbard status", () => {
        const activeBusState = store.getState().activeBus;
        const payload = {busId:1,passengers:8};
        store.dispatch(start(payload));
        state[0].busStatus = "On Board";
        state[0].passengers = 8;
        expect(activeBusState).toEqual(state);
        
    });





})