import { createSlice } from "@reduxjs/toolkit";

export const medFile = createSlice({
  name: "medFile",
  initialState: {
    getMedFileId:{
        data: {},
        isLoading: false,
        isError: "",
    },
    postMedFile:{
      data: {},
      isLoading: false,
      isError: "",
  }
  },
  reducers: {
    getMedFileIdRequest(state) {
      state.getMedFileId.isLoading = true;
    },
    getMedFileIdSuccess(state, action) {
      state.getMedFileId.isError = "";
      state.getMedFileId.isLoading = false;
      state.getMedFileId.data = action.payload;

    },
    getMedFileIdFailure(state, action) {
      state.getMedFileId.isLoading = false;
      state.getMedFileId.isError = action.payload;
      state.getMedFileId.data = {};
    //   console.log(action.payload);
    },

    postMedFileRequest(state) {
      state.postMedFile.isLoading = true;
    },
    postMedFileSuccess(state, action) {
      state.postMedFile.isError = "";
      state.postMedFile.isLoading = false;
      state.postMedFile.data = action.payload;

    },
    postMedFileFailure(state, action) {
      state.postMedFile.isError = action.payload;
      state.postMedFile.isLoading = false;

    }
  },
});

export default medFile.reducer;
export const { getMedFileIdRequest, getMedFileIdSuccess, getMedFileIdFailure,
    postMedFileRequest,postMedFileSuccess,postMedFileFailure} = medFile.actions;
