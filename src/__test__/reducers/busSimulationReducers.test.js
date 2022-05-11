import { start, updateActiveBus,speedControl } from "../../redux/actions/ActiveBus" 
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
                busStatus:"parked",
                speedStatus:"",
                speed:{ prev: 1 , current:1 }
            },
        ];
        store = testStore();
    });

    it("should return the initialState for no action", () => {
        const activeBusState = store.getState().activeBus;
        expect(activeBusState).toEqual(state);
    });

    it("On start bus should return onboard status", () => {
        const activeBusState = store.getState().activeBus;
        const payload = {busId:1,passengers:8};
        store.dispatch(start(payload));
        state[0].busStatus = "On Board";
        state[0].speedStatus = "Speeding up";
        state[0].speed.current = 5;
        state[0].speed.prev = 5;
        expect(activeBusState[0].busStatus).toEqual(state[0].busStatus );
        expect(activeBusState[0].speed.current).toEqual(state[0].speed.current);
        expect(activeBusState[0].speed.prev).toEqual(state[0].speed.prev);
        
    });

    it("After bus stop the status should be again onboard", () => {
        const activeBusState = store.getState().activeBus;
        const payload = {driverId:1,alighting:4,joining:7};
        store.dispatch(updateActiveBus(payload));
        state[0].busStatus = "On Board";
        expect(activeBusState[0].busStatus).toEqual(state[0].busStatus);        
    });

    it("Speed up test ", () => {
        const activeBusState = store.getState().activeBus;
        store.dispatch(speedControl({busId: 1 , speed: 89 }));
        state[0].speedStatus = "Speeding up";
        state[0].busStatus = "On Board";
        state[0].speed.current = 89;
        state[0].passengers = 8;
        state[0].speed.prev = 89;
        expect(activeBusState).toEqual(state);
        
    });





})