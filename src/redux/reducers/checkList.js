import { createSlice } from "@reduxjs/toolkit";

export const checkList = createSlice({
  name: "checkList",
  initialState: {
    getCheckList:{
        data: [],
        isLoading: false,
        isError: "",
    },
    postCheckList:{
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
    },

    postCheckListRequest(state) {
      state.postCheckList.isLoading = true;
    },
    postCheckListSuccess(state, action) {
      state.postCheckList.isError = "";
      state.postCheckList.isLoading = false;
      state.postCheckList.data = action.payload;

    },
    postCheckListFailure(state, action) {
      state.postCheckList.isError = action.payload;
    }
  },
});

export default checkList.reducer;
export const { getCheckListRequest, getCheckListSuccess, getCheckListFailure,
  postCheckListRequest,postCheckListSuccess,postCheckListFailure} =
checkList.actions;
