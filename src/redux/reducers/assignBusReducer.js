import { assignBusActionType } from '../constants/assignBusActionTypes'

// const { ASSIGN_BUS, REMOVE_BUS } = assignBusActionType


const assignBusState = [
    {
        id: 1,
<<<<<<< HEAD
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
    },
=======
        driverName: "Driver",
        assignedBus : [
            {
                id:1,
                busName: "YUTONG",
                plateNumber: "RAF90"
            }
        ]
    }
>>>>>>> redux for assign bus
]

export const assignBusReducer = (state = assignBusState, {type, payload }) => {
    switch(type){
        case assignBusActionType.ASSIGN_BUS:
            const clonedState = [...state]
            const { driverId, bus, plate } = payload
            const driverToBeAssigned = clonedState.filter(current => current.id == driverId)
            const assignIndex = clonedState.findIndex(current => current.id == driverId)
            const updateAssignedBus = [...driverToBeAssigned[0].assignedBus]
            let assignedCounter = driverToBeAssigned[0].assignedBus.length + 1

            
            updateAssignedBus.push({
                id: assignedCounter,
                busName:bus,
                plateNumber: plate
            })
            clonedState[assignIndex].assignedBus = updateAssignedBus
            state = clonedState
            return state
        default:
            return state
    }
}