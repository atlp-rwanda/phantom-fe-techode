// import { busesReducer } from "../../redux/reducers/busesReducer";
// import { busAction } from "../../redux/constants/busActionType"

// describe("Testing => busesReducer(state, action)", () => {

//     let initialState
//   beforeEach(()=>{
//     initialState = [
//         {
//             id: 1,
//             busType: "Yutong",
//             route: 401,
//             plate: "RAF102F"
//         }
//     ];

//   });

  
//   it("should return the initialState for no action", () => {
//     const reducer = busesReducer(undefined, {});
//     expect(reducer).toEqual(initialState);
//   });

//   it("should return the initialState for no action", () => {
//     const state = [];
    
    
//     const reducer = busesReducer(undefined, {
//         type: busAction.DELETE,
//         payload: 1,
//     });
//     expect(reducer).toEqual([]);
//   });



// })

import { createBus, deleteBus, updateBusInfo } from "../../redux/actions/busAction"; 
import { testStore } from "../../utls/testStore";

describe("Testing => busesReducer(state, action)", () => {
    let state
    let store
    beforeEach(() => {
        state = [
                    {
                        id: 1,
                        busType: "Yutong",
                        route: 401,
                        plate: "RAF102F"
                    }
                ];
        store = testStore();
    });

    it("should return the initialState for no action", () => {
        const BusOpState = store.getState().buses;
        expect(BusOpState).toEqual(state);
    });

    it("Should return status after deletion", () => {
        const payload = {busId:1};
        store.dispatch(deleteBus(payload));
        const BusOpState = store.getState().buses;
        expect(BusOpState).toEqual([]);
        
    });

    it("Should return status after update", () => {
        const payload = {
            id: 1,
            busType: "Different",
            route: 500,
            plate: "RAB306R"
        };
        store.dispatch(updateBusInfo(payload));
        const BusOpState = store.getState().buses;
        expect(BusOpState).toEqual([payload]);
        
    });

    it("Should return status after creation", () => {
        const payload = {
            id: 2,
            busType: "Royal",
            route: 703,
            plate: "RAE406R"
        };
        state.push(payload)
        store.dispatch(createBus(payload));
        const BusOpState = store.getState().buses;
        expect(BusOpState).toEqual(state);
        
    });




})