import useUpload from "../../features/upload/useUpload";

const FileDropzone = ({ children }) => {
  const {
    dragActive,
    setDrag,
    handleFiles,
  } = useUpload();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      e.type === "dragenter" ||
      e.type === "dragover"
    ) {
      setDrag(true);
    }

    if (e.type === "dragleave") {
      setDrag(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDrag(false);

    if (e.dataTransfer.files?.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  return (
    <div
      className="relative h-full"
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      {/* OVERLAY */}
      {dragActive && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="rounded-2xl border border-zinc-700 bg-zinc-900 px-10 py-8 text-center">
            <h2 className="text-2xl font-semibold text-white">
              Drop PDF Here
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Upload your document to chat
              with it
            </p>
          </div>
        </div>
      )}

      {children}
    </div>
  );
};

export default FileDropzone;