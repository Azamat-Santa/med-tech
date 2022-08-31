import { createSlice } from "@reduxjs/toolkit";

export const adminDoctor = createSlice({
  name: "patient",
  initialState: {
    doctorAll: {
      data: [],
      isLoading: false,
      isError: "",
    },
    doctorId: {
      data: [],
      isLoading: false,
      isError: "",
    },
    newDoctorRegister: {
      data: {},
      isLoading: false,
      isError: "",
    },
    deleteDoctor: {
      data: [],
      isLoading: false,
      isError: "",
    },
  },
  reducers: {
    getDoctorRequest(state) {
      state.doctorAll.isLoading = true;
    },
    getDoctorSuccess(state, action) {
      state.doctorAll.isError = "";
      state.doctorAll.isLoading = false;
      state.doctorAll.data = action.payload;
    },
    getDoctorFailure(state, action) {
      state.doctorAll.isError = action.payload;
    },

    getDoctorIdRequest(state) {
      state.doctorId.isLoading = true;
    },
    getDoctorIdSuccess(state, action) {
      state.doctorId.isError = "";
      state.doctorId.isLoading = false;
      state.doctorId.data = action.payload;
    },
    geDoctorIdFailure(state, action) {
      state.doctorId.isError = action.payload;
    },
    postNewDoctorRequest(state, action){
      state.newDoctorRegister.isLoading = true;
    },
    postNewDoctorSuccess(state, action){
      state.newDoctorRegister.isLoading = false;
      state.newDoctorRegister.isError = action.payload;
      state.newDoctorRegister.data = action.payload;
      
    },
    postNewDoctorFailure(state, action){
      state.newDoctorRegister.isError = action.payload;
      state.newDoctorRegister.isLoading = false;
    },
    deleteDoctorRequest(state,action){
       state.deleteDoctor.isLoading = true
    },
    deleteDoctorSuccess(state,action){
      state.deleteDoctor.data = action.payload
      state.deleteDoctor.isLoading = false
      state.deleteDoctor.isError = ''

    },
    deleteDoctorFailure(state,action){
      state.deleteDoctor.isLoading = false
      state.deleteDoctor.data = {}
      state.deleteDoctor.isError = action.payload


    },
  },
});

export default adminDoctor.reducer;
export const { 
  getDoctorRequest, getDoctorSuccess, 
  getDoctorFailure,getDoctorIdRequest, 
  getDoctorIdSuccess,getDoctorIdFailure, 
  postNewDoctorRequest,postNewDoctorSuccess,
  postNewDoctorFailure,deleteDoctorRequest,deleteDoctorSuccess,
  deleteDoctorFailure
} = adminDoctor.actions;
