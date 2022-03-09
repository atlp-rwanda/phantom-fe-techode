import { applyMiddleware, createStore } from "redux";
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk'


export const middlewares = [ reduxThunk ];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

/* ========= Start: configuration store ========= */ 
const  store = createStoreWithMiddleware(reducers , {} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/* ========== End: configuration store ========== */ 

export default store