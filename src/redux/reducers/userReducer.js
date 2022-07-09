import { createSlice } from '@reduxjs/toolkit';

 const coutSlice = createSlice({
 name:'count',
 initialState:{
    count:0
 },
 reducers:{
    increment(state){
        state.count = state.count + 1 
    },
    decrement(state){
        state.count = state.count - 1 
    },
 }
})

export default coutSlice.reducer
export const {increment, decrement} = coutSlice.actions