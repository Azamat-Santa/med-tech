import { createSlice } from "@reduxjs/toolkit";

export const checkList = createSlice({
  name: "checkList",
  initialState: {
    getCheckList:{
        data: [],
        isLoading: false,
        isError: "",
    }
  },
  reducers: {
    getCheckListRequest(state) {
      state.getCheckList.isLoading = true;
    },
    getCheckListSuccess(state, action) {
      state.getCheckList.isError = "";
      state.getCheckList.isLoading = false;
      state.getCheckList.data = action.payload;

    },
    getCheckListFailure(state, action) {
      state.getCheckList.isError = action.payload;
    }
  },
});

export default checkList.reducer;
export const { getCheckListRequest, getCheckListSuccess, getCheckListFailure} =
checkList.actions;
