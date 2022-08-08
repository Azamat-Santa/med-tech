import { createSlice } from '@reduxjs/toolkit';


 export const appoinment = createSlice({
 name:'patient',
 initialState:{
    appoinment:[],
    isLoading:false,
    isError:'',
    isErrorPost:'',
    isLoadingPost:'',
    responsePost:''
 },
 reducers:{
    getAppoinmentRequest(state ){
        state.isLoading = true
     },
    getAppoinmentSuccess(state ,action){
       state.isError=''
       state.isLoading = false
       state.appoinment =  action.payload
      //  console.log(action.payload);
    },
    getAppoinmentFailure(state,action){
        state.isError=action.payload
    }
 }
})

export default appoinment.reducer
export const {getAppoinmentRequest, getAppoinmentSuccess,getAppoinmentFailure} = appoinment.actions