import { assignBusReducer } from '../../redux/reducers/assignBusReducer'
import { assignBusActionType } from '../../redux/constants/assignBusActionTypes'

describe("Testing => assignBus reducer(state, action)", () => {
    let initialState
    beforeEach(() => {
        initialState = [
            {
                id: 1,
                driverName: "John Doe",
                telephone: "788966656",
                email: "test111@gmail.com",
            },
            {
                id: 2,
                driverName: "MAZO",
                telephone: "788966656",
                email: "test1111@gmail.com",
                assignedBus : [
            ]
            },
            {
                id: 3,
                driverName: "Jane Doe",
                email: "test1@gmail.com",
                telephone: "788966656",
                assignedBus : [
                ]
            },
            {
                id: 4,
                driverName: "GANG",
                email: "test11@gmail.com",
                telephone: "788966656",
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
                telephone: "788966656",
                email: "test111@gmail.com",
                assignedBus : [
                ]
            },
            {
                id: 2,
                driverName: "MAZO",
                telephone: "788966656",
                email: "test1111@gmail.com",
                assignedBus : [
            ]
            },
            {
                id: 3,
                driverName: "Jane Doe",
                email: "test1@gmail.com",
                telephone: "788966656",
                assignedBus : [
                ]
            },
            {
                id: 4,
                driverName: "GANG",
                email: "test11@gmail.com",
                telephone: "788966656",
                assignedBus : [
            ]
            }
          ];
    
        const reducer = assignBusReducer(initialState, {
          type: assignBusActionType.ASSIGN_BUS,
          payload:  {driverId: 1, bus: "TOYOTA", plate:"PLATE908"},
        });
        expect(reducer).toEqual(state);
      });
})
