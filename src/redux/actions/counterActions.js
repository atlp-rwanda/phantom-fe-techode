import { ActionTypes } from "../constants/actionType"

export const getCount = () =>{
    return {
        type:ActionTypes.GET_COUNT
    }
}
export const incrementCount = () =>{
    return {
        type:ActionTypes.INCREMENT_COUNT
    }
}

export const decrementCount = () =>{
    return {
        type:ActionTypes.DECREMENT_COUNT
    }
}


export const incrementBy = (count) =>{
    return {
        type:ActionTypes.INCREMENT_COUNT_BY_VALUE,
        payload: count
    }
}


export const decrementBy = (count) =>{
    return {
        type:ActionTypes.DECREMENT_COUNT_BY_VALUE,
        payload: count
    }
}