import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  doctorSlice  from "./reducers/userReducer";


const rootReducer = combineReducers({
    doctor:doctorSlice
})

export const store = configureStore({
    reducer:rootReducer,
})