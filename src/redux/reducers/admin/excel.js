import { createSlice } from "@reduxjs/toolkit";

export const excel = createSlice({
  name: "excel",
  initialState: {
      data: {},
      isLoading: false,
      isError: "",
  },
  reducers: {
    getExcelRequest(state) {
      state.isLoading = true;
    },
    getExcelSuccess(state, action) {
      state.isError = "";
      state.isLoading = false;
      state.data = action.payload;
    },
    getExcelFailure(state, action) {
      state.isError = action.payload;
    }    
  }
});

export default excel.reducer;
export const { getExcelRequest, getExcelSuccess, getExcelFailure} = excel.actions;
 
 
 
 
 
 
 