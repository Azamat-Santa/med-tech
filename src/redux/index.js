import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  coutSlice  from "./reducers/userReducer";


const rootReducer = combineReducers({
    count:coutSlice
})

export const store = configureStore({
    reducer:rootReducer,
})