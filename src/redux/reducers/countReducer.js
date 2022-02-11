import  { ActionTypes } from "../constants/actionType"

const { DECREMENT_COUNT_BY_VALUE,GET_COUNT, INCREMENT_COUNT,DECREMENT_COUNT,INCREMENT_COUNT_BY_VALUE } = ActionTypes ;

const initialState = {
    count: 0
}

export const counterReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case GET_COUNT:
            return state;     
        case INCREMENT_COUNT: 
            const addOne = state.count + 1;            
            return {...state , count:addOne}; 
        case DECREMENT_COUNT: 
            const removeOne = state.count - 1;            
            return {...state , count:removeOne};     
        case INCREMENT_COUNT_BY_VALUE: 
            const  subtractBy = state.count + payload;            
            return {...state , count: subtractBy};  
        case DECREMENT_COUNT_BY_VALUE:
            const addBy = state.count - payload;
            return {...state , count: addBy};    
        default:
            return state;
    }
}