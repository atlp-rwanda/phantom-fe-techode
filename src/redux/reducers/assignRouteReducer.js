import { assignRouteActionType } from '../constants/assignRouteActionTypes'

const assignRouteState = [
    {
        id: 1,
        bustype: "HIACE",
        routecode: "100",
        platenumber:"RAD-X90",
        routeId: 1,
        assignedRoute : [
        ]
    },
    {
        id: 2,
        bustype: "COASTER",
        routecode: "102",
        platenumber: "RAD-980",
        routeId: null,
        assignedRoute : [
    ]
    },
]

export const assignRouteBusReducer = (state = assignRouteState, {type, payload }) => {
    switch(type){
        case assignRouteActionType.ASSIGN_ROUTE:
            const clonedState = [...state]
            const { busId, plate, routeName} = payload
            console.log(routeName)
            let name = routeName.split('*')
            const busToBeAssigned = clonedState.filter(current => current.id == busId)
            console.log("bus to be assigned ", busToBeAssigned)
            const assignIndex = clonedState.findIndex(current => current.id == busId)
            const updateAssignedBus = [...busToBeAssigned[0].assignedRoute]
            let assignedCounter = busToBeAssigned[0].assignedRoute.length + 1

            
            updateAssignedBus.push({
                id: assignedCounter,
                name:name[1],
                code: name[0]
            })
            clonedState[assignIndex].assignedRoute = updateAssignedBus
            state = clonedState
            return state
        case assignRouteActionType.REMOVE_ROUTE:
            const currentState = [...state]
            let { buseId, routeId } = payload
            const driverToBeRemoved = currentState.filter(current => current.id == buseId)
            const indexDel = currentState.findIndex(current => current.id == buseId)
            const busToDelete = [...driverToBeRemoved[0].assignedRoute]
            const newAssignedBus = busToDelete.filter(bus => bus.id != routeId)
            currentState[indexDel].assignedRoute = newAssignedBus
            state = currentState
            return state
        default:
            return state
    } 
}