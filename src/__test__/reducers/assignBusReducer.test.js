import { assignBusReducer } from '../../redux/reducers/assignBusReducer'
import { assignBusActionType } from '../../redux/constants/assignBusActionTypes'

describe("Testing => assignBus reducer(state, action)", () => {
    let initialState
    beforeEach(() => {
        initialState = [
            {
                id: 1,
                driverName: "John Doe",
                assignedBus : [
                ]
            },
            {
                id: 2,
                driverName: "MAZO",
                assignedBus : [
            ]
            }
        ]
    })
    it("should return the initialState for no action", () => {
        const reducer = assignBusReducer(undefined, {});
        expect(reducer).toEqual(initialState);
      });

      it("should accept assign driver new bus", () => {

        const state = [
            {
                id: 1,
                driverName: "John Doe",
                assignedBus : [
                    {
                        id: 1,
                        busName:"TOYOTA",
                        plateNumber: "PLATE908",
                    }
                ]
            },
            {
                id: 2,
                driverName: "MAZO",
                assignedBus : [
                ]
            },
          ];
    
        const reducer = assignBusReducer(initialState, {
          type: assignBusActionType.ASSIGN_BUS,
          payload:  {driverId: 1, bus: "TOYOTA", plate:"PLATE908"},
        });
        expect(reducer).toEqual(state);
      });
})
