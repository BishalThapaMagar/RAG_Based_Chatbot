import { useDispatch, useSelector } from "react-redux";

import {
  addFiles,
  removeFile,
  clearFiles,
  setDragActive,
} from "./uploadSlice";

import { createFileObject } from "./uploadUtils";

const useUpload = () => {
  const dispatch = useDispatch();

  const files = useSelector(
    (state) => state.upload.files
  );

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
      .map(createFileObject);

    dispatch(addFiles(validFiles));
  };

  // REMOVE FILE
  const deleteFile = (id) => {
    dispatch(removeFile(id));
  };

  return {
    files,

    dragActive,

    handleFiles,

    deleteFile,

    clearAllFiles: () =>
      dispatch(clearFiles()),

    setDrag: (value) =>
      dispatch(setDragActive(value)),
  };
};

export default useUpload;