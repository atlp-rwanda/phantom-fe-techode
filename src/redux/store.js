import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'

/* ========= Start: configuration store ========= */ 

export default configureStore({
    reducer:{
        counter: counterReducer
    }
})


/* ========== End: configuration store ========== */ 