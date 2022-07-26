import { createSlice } from '@reduxjs/toolkit';

 export const doctorSlice = createSlice({
 name:'authDoctor',
 initialState:{
    isAuth:localStorage.getItem('isAuth'),
    isLoading:false,
    isError:'',
    response:{}
 },
 reducers:{
    authDoctorRequest(state ,action){
        // console.log(action);
        state.isLoading = true
        state.isError=''

     },
    authDoctorSuccess(state ,action){
    //    console.log(action);
       state.isError=''
       state.isLoading = false
       state.isAuth = true
       state.response = action.payload
    },
    authDoctorFailure(state,action){
        // console.log(action.payload);
        state.isError=action.payload
    },
    

 }
})

export default doctorSlice.reducer
export const {authDoctorRequest, authDoctorSuccess,authDoctorFailure} = doctorSlice.actions