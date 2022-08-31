import { createSlice } from '@reduxjs/toolkit';


 export const appoinment = createSlice({
 name:'patient',
 initialState:{
    appoinment:[],
    isLoading:false,
    isError:'',
    isErrorPost:'',
    isLoadingPost:false,
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
    },
    postAppoinmentRequest(state ){
      state.isLoadingPost = true
   },
  postAppoinmentSuccess(state ,action){
     state.isErrorPost=''
     state.isLoadingPost = false
     state.responsePost =  action.payload
 
  },
  postAppoinmentFailure(state,action){
      state.isErrorPost=action.payload
      state.isLoadingPost=false

  }
 }
})

export default appoinment.reducer
export const {getAppoinmentRequest, getAppoinmentSuccess,getAppoinmentFailure,
   postAppoinmentRequest,postAppoinmentSuccess,postAppoinmentFailure} = appoinment.actions