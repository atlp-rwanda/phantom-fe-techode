import  { ActionTypes } from "../constants/actionType"

const { DECREMENT_COUNT_BY_VALUE,GET_COUNT, INCREMENT_COUNT,DECREMENT_COUNT,INCREMENT_COUNT_BY_VALUE } = ActionTypes ;

export const getCount = () =>{
    return {
        type: GET_COUNT
    }
}
export const incrementCount = () =>{
    return {
        type: INCREMENT_COUNT
    }
}

export const decrementCount = () =>{
    return {
        type: DECREMENT_COUNT
    }
}


export const incrementBy = (count) =>{
    return {
        type: INCREMENT_COUNT_BY_VALUE,
        payload: count
    }
}


export const decrementBy = (count) =>{
    return {
        type: DECREMENT_COUNT_BY_VALUE,
        payload: count
    }
}