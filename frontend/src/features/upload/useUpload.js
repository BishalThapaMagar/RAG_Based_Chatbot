import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addFiles,
  removeFile,
  clearFiles,
  setDragActive,
  setUploading,
  setUploadProgress,
} from "./uploadSlice";

import { useRef } from "react";

import { createFileObject }
  from "./uploadUtils";

import { uploadFilesAPI }
  from "./uploadAPI";


const useUpload = () => {

  const dispatch = useDispatch();

  const files = useSelector(
    (state) => state.upload.files
  );

  const fileRefsMap = useRef({});

  const dragActive = useSelector(
    (state) => state.upload.dragActive
  );

  // ADD FILES
  const handleFiles = (fileList) => {

    const validFiles = Array.from(fileList)
      .filter(
        (file) =>
          file.type === "application/pdf"
      )
      .map((file) => {
        const fileObj = createFileObject(file);
        fileRefsMap.current[fileObj.id] = file;
        return fileObj;
      });

    dispatch(addFiles(validFiles));
  };

  // REMOVE FILE
  const deleteFile = (id) => {
    delete fileRefsMap.current[id];
    dispatch(removeFile(id));
  };

  // REAL BACKEND UPLOAD
  const uploadFiles = async () => {
    if (files.length === 0) {
      return null;
    }

    try {
      dispatch(setUploading(true));
      dispatch(setUploadProgress(10));

      const rawFiles = files.map(
        (fileObj) => fileRefsMap.current[fileObj.id]
      ).filter(Boolean);

      const response =
        await uploadFilesAPI(rawFiles);

      dispatch(setUploadProgress(100));
      dispatch(setUploading(false));

      files.forEach((file) => {
        delete fileRefsMap.current[file.id];
      });
      dispatch(clearFiles());

      console.log(
        "Upload Success:",
        response
      );

      return response;
    } catch (error) {
      dispatch(setUploading(false));
      dispatch(setUploadProgress(0));

      console.error(error);

      throw error;
    }
  };

  return {
    files,

    dragActive,

    handleFiles,

    deleteFile,

    uploadFiles,

    clearAllFiles: () =>
      dispatch(clearFiles()),

    setDrag: (value) =>
      dispatch(setDragActive(value)),
  };
};

export default useUpload;