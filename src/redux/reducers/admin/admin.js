import { createSlice } from '@reduxjs/toolkit';

 export const admin = createSlice({
 name:'authDoctor',
 initialState:{
    isAuth:false,
    isLoading:false,
    isError:'',
    getAllAdmin:{
       data:[],
       isLoading:false,
       isError:'',
    },
    getOneAdmin:{
      data:{},
      isLoading:false,
      isError:'',
   }
 },
 reducers:{
    authAdminRequest(state ,action){
        state.isLoading = true
        state.isError=''
     },
    authAdminSuccess(state ,action){
       state.isError=''
       state.isLoading = false
       state.isAuth = true
    
    },
    authAdminFailure(state,action){
        state.isLoading = false
        state.isError=action.payload
    },
    authCheckAdminRequest(state){
      state.isAuth = false
       state.isLoading = true
    },
    authCheckAdminSuccess( state, action){
       state.isAuth = true
       state.isLoading = false
    },
    authCheckAdminFailer(state, action){
      state.isError = action.payload
    },
    authLogOut(state, action){
      state.isAuth = false
    },

    getAdminsRequest(state) {
      state.getAllAdmin.isLoading = true;
    },
    getAdminsSuccess(state, action) {
      state.getAllAdmin.isError = "";
      state.getAllAdmin.isLoading = false;
      state.getAllAdmin.data = action.payload;
   
    },
    getAdminsFailure(state, action) {
      state.getAllAdmin.isError = action.payload;
      state.getAllAdmin.isLoading = false;
    },

    getAdminOneRequest(state) {
      state.getOneAdmin.isLoading = true;
    },
    getAdminOneSuccess(state, action) {
      state.getOneAdmin.isError = "";
      state.getOneAdmin.isLoading = false;
      state.getOneAdmin.data = action.payload;
   
    },
    getAdminOneFailure(state, action) {
      state.getOneAdmin.isError = action.payload;
      state.getOneAdmin.isLoading = false;
    },


 }
})

export default admin.reducer
export const {authAdminRequest, authAdminSuccess,authAdminFailure,
   authCheckAdminRequest,authCheckAdminSuccess,authCheckAdminFailer,authLogOut,
   getAdminsRequest,getAdminsSuccess,getAdminsFailure,getAdminOneRequest,
   getAdminOneSuccess,getAdminOneFailure} = admin.actions