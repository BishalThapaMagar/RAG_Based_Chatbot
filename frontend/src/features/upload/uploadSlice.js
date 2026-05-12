import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],

  dragActive: false,

  isUploading: false,

  uploadProgress: 0,
};

const uploadSlice = createSlice({
  name: "upload",

  initialState,

  reducers: {
    addFiles: (state, action) => {
      state.files.push(...action.payload);
    },

    removeFile: (state, action) => {
      state.files = state.files.filter(
        (file) => file.id !== action.payload
      );
    },

    clearFiles: (state) => {
      state.files = [];
    },

    setDragActive: (state, action) => {
      state.dragActive = action.payload;
    },

    setUploading: (state, action) => {
      state.isUploading = action.payload;
    },

    setUploadProgress: (state, action) => {
      state.uploadProgress = action.payload;
    },
  },
});

export const {
  addFiles,
  removeFile,
  clearFiles,
  setDragActive,
  setUploading,
  setUploadProgress,
} = uploadSlice.actions;

export default uploadSlice.reducer;