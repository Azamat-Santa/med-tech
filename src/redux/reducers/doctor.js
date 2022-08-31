import { createSlice } from '@reduxjs/toolkit';

 export const doctorSlice = createSlice({
 name:'authDoctor',
 initialState:{
    isAuth:false,
    isLoading:false,
    isError:'',
 },
 reducers:{
    authDoctorRequest(state ,action){
        state.isLoading = true
        state.isError=''
     },
    authDoctorSuccess(state ,action){
       state.isError=''
       state.isLoading = false
       state.isAuth = true
    
    },
    authDoctorFailure(state,action){
        state.isLoading = false
        state.isError=action.payload
    },
    authCheckDoctorRequest(state){
      state.isAuth = false
       state.isLoading = true
    },
    authCheckDoctorSuccess( state, action){
       state.isAuth = true
       state.isLoading = false
    },
    authCheckDoctorFailer(state, action){
      state.isError = action.payload
    },
    authLogOut(state, action){
      state.isAuth = false
    }

 }
})

export default doctorSlice.reducer
export const {authDoctorRequest, authDoctorSuccess,authDoctorFailure,
   authCheckDoctorRequest,authCheckDoctorSuccess,authCheckDoctorFailer,authLogOut} = doctorSlice.actions