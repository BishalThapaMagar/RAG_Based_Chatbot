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

import { createFileObject }
  from "./uploadUtils";

import { uploadFilesAPI }
  from "./uploadAPI";


const fileRefsMap = new Map();

const useUpload = () => {

  const dispatch = useDispatch();

  const files = useSelector(
    (state) => state.upload.files
  );

  const activeConversationId = useSelector(
    (state) => state.conversations.activeConversationId
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
      .map((file) => {
        const fileObj = createFileObject(file);
        fileRefsMap.set(fileObj.id, file);
        return fileObj;
      });

    dispatch(addFiles(validFiles));
  };

  // REMOVE FILE
  const deleteFile = (id) => {
    fileRefsMap.delete(id);
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
        (fileObj) => fileRefsMap.get(fileObj.id)
      ).filter(Boolean);

      if (rawFiles.length === 0) {
        throw new Error(
          "Selected files are no longer available. Please attach them again."
        );
      }

      const response =
        await uploadFilesAPI(rawFiles, activeConversationId);

      dispatch(setUploadProgress(100));
      dispatch(setUploading(false));

      files.forEach((file) => {
        fileRefsMap.delete(file.id);
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

    clearAllFiles: () => {
      fileRefsMap.clear();
      dispatch(clearFiles());
    },

    setDrag: (value) =>
      dispatch(setDragActive(value)),
  };
};

export default useUpload;
