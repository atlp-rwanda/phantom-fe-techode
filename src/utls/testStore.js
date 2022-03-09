/* ========== Start::configuration =========== */ 
import { applyMiddleware , createStore } from 'redux';
import reducers from '../redux/reducers/index';
import { middlewares } from "../redux/store";
/* ===========  End::configuration =========== */ 


/* ============ Start:: Test store ============ */ 
export const testStore = (initialState) =>{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(reducers,initialState);
}
/* ============== End:: Test store ============ */ 
  