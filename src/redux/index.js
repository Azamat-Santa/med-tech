import { combineReducers, configureStore } from "@reduxjs/toolkit";
import   doctorSlice   from "./reducers/doctor.js";
import patient from "./reducers/patient.js";
import  appoinment  from './reducers/appointment';
import  checkList from './reducers/checkList';
import medFile from "./reducers/medFile.js";
import admin from "./reducers/admin/admin.js";
import  adminDoctor from "./reducers/admin/adminDoctors.js";
import adminManager from "./reducers/admin/adminManager.js";
import excel from "./reducers/admin/excel.js";


const rootReducer = combineReducers({
    doctor: doctorSlice,
    patient: patient,
    appoinment:appoinment,
    checkList:checkList,
    medFile:medFile,
    admin:admin,
    adminDoctor: adminDoctor,
    adminManager: adminManager,
    excel:excel
})

export const store = configureStore({
    reducer:rootReducer,
})