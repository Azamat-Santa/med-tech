import { createSlice } from "@reduxjs/toolkit";

export const adminManager = createSlice({
  name: "patient",
  initialState: {
    managerAll: {
      data: [],
      isLoading: false,
      isError: "",
    },
    managerId: {
      data: [],
      isLoading: false,
      isError: "",
    },
    newManagerRegister: {
      data: {},
      isLoading: false,
      isError: "",
    },
    deleteManager:{
      data: {},
      isLoading: false,
      isError: ""
    }
  },
  reducers: {
    getManagerRequest(state) {
      state.managerAll.isLoading = true;
    },
    getManagerSuccess(state, action) {
      state.managerAll.isError = "";
      state.managerAll.isLoading = false;
      state.managerAll.data = action.payload;
    },
    getManagerFailure(state, action) {
      state.managerAll.isError = action.payload;
    },

    getManagerIdRequest(state) {
      state.managerId.isLoading = true;
    },
    getManagerIdSuccess(state, action) {
      state.managerId.isError = "";
      state.managerId.isLoading = false;
      state.managerAllManagerId.data = action.payload;
    },
    getManagerIdFailure(state, action) {
      state.doctorId.isError = action.payload;
    },
    postNewManagerRequest(state, action){
      state.newManagerRegister.isLoading = true;
    },
    postNewManagerSuccess(state, action){
      state.newManagerRegister.isLoading = false;
      state.newManagerRegister.isError = action.payload;
      state.newManagerRegister.data = action.payload;
      
    },
    postNewManagerFailure(state, action){
      state.newManagerRegister.isError = action.payload;
      state.newManagerRegister.isLoading = false;
    },
    deleteManagerRequest(state,action){
      state.deleteManager.isLoading = true
   },
   deleteManagerSuccess(state,action){
     state.deleteManager.data = action.payload
     state.deleteManager.isLoading = false
     state.deleteManager.isError = ''

   },
   deleteManagerFailure(state,action){
     state.deleteManager.isLoading = false
     state.deleteManager.data = {}
     state.deleteManager.isError = action.payload


   },
  },
});

export default adminManager.reducer;
export const { 
  getManagerRequest, getManagerSuccess, 
  getManagerFailure,getManagerIdRequest, 
  getManagerIdSuccess,getManagerIdFailure, 
  postNewManagerRequest,postNewManagerSuccess,
  postNewManagerFailure,deleteManagerRequest,
  deleteManagerSuccess,deleteManagerFailure
} = adminManager.actions;
