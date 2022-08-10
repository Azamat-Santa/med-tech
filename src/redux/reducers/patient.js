import { createSlice } from "@reduxjs/toolkit";
import { filterPatient } from "../../helpers/filterPatient";

export const patient = createSlice({
  name: "patient",
  initialState: {
    patientAll: {
      data: [],
      isLoading: false,
      isError: "",
      pending: [],
      whoGaveBirth: [],
    },
    patientId: {
      data: [],
      isLoading: false,
      isError: "",
    },
    newPatientregister: {
      data: {},
      isLoading: false,
      isError: "",
    },
  },
  reducers: {
    getPatientRequest(state) {
      state.patientAll.isLoading = true;
    },
    getPatientSuccess(state, action) {
      state.patientAll.isError = "";
      state.patientAll.isLoading = false;
      state.patientAll.data = action.payload;
      state.patientAll.pending = filterPatient(action.payload, "pending");
      state.patientAll.whoGaveBirth = filterPatient(
        action.payload,
        "whoGaveBirth"
      );
    },
    getPatientFailure(state, action) {
      state.patientAll.isError = action.payload;
    },

    getPatientIdRequest(state) {
      state.patientId.isLoading = true;
    },
    getPatientIdSuccess(state, action) {
      state.patientId.isError = "";
      state.patientId.isLoading = false;
      state.patientId.data = action.payload;
    },
    getPatientIdFailure(state, action) {
      state.patientId.isError = action.payload;
    },
    postNewPatientRequest(state, action){
      state.newPatientregister.isLoading = true;
    },
    postNewPatientSuccess(state, action){
      state.newPatientregister.isLoading = false;
      state.newPatientregister.isError = action.payload;
      state.newPatientregister.data = action.payload;
      
    },
    postNewPatientFailure(state, action){
      state.newPatientregister.isError = action.payload;
      state.patientId.isLoading = false;
    },
  },
});

export default patient.reducer;
export const { 
  getPatientRequest, getPatientSuccess, 
  getPatientFailure,getPatientIdRequest, 
  getPatientIdSuccess,getPatientIdFailure, 
  postNewPatientRequest,postNewPatientSuccess,
  postNewPatientFailure

} =
  patient.actions;
