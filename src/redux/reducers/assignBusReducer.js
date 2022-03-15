import { assignBusActionType } from '../constants/assignBusActionTypes'

// const { ASSIGN_BUS, REMOVE_BUS } = assignBusActionType


const assignBusState = [
    {
        id: 1,
        driverName: "Driver",
        assignedBus : [
            {
                id:1,
                busName: "YUTONG",
                plateNumber: "RAF90"
            }
        ]
    }
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