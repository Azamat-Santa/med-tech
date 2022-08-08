import { combineReducers, configureStore } from "@reduxjs/toolkit";
import   doctorSlice   from "./reducers/doctor.js";
import patient from "./reducers/patient.js";
import  appoinment  from './reducers/appointment';


const rootReducer = combineReducers({
    doctor: doctorSlice,
    patient: patient,
    appoinment:appoinment
})

export const store = configureStore({
    reducer:rootReducer,
})