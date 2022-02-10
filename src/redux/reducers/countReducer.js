import { ActionTypes } from "../constants/actionType"

const initialState = {
    count: 0
}

export const counterReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case ActionTypes.GET_COUNT:
            return state;     
        case ActionTypes.INCREMENT_COUNT: 
            const addOne = state.count + 1;            
            return {...state , count:addOne}; 
        case ActionTypes.DECREMENT_COUNT: 
            const removeOne = state.count - 1;            
            return {...state , count:removeOne};     
        case ActionTypes.INCREMENT_COUNT_BY_VALUE: 
            const  subtractBy = state.count + payload;            
            return {...state , count: subtractBy};  
        case ActionTypes.DECREMENT_COUNT_BY_VALUE:
            const addBy = state.count - payload;
            return {...state , count: addBy};    
        default:
            return state;
    }
}