import { useSelector } from "react-redux";

const UploadProgress = () => {
  const {
    isUploading,
    uploadProgress,
  } = useSelector(
    (state) => state.upload
  );

  if (!isUploading) return null;

  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between text-xs text-zinc-400">
        <span>Uploading PDFs...</span>

        <span>{uploadProgress}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          style={{
            width: `${uploadProgress}%`,
          }}
          className="h-full bg-blue-500 transition-all"
        />
      </div>
    </div>
  );
};

export default UploadProgress;