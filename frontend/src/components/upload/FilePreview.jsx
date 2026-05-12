import { FileText, X } from "lucide-react";

import useUpload from "../../features/upload/useUpload";

import { formatFileSize } from "../../features/upload/uploadUtils";

const FilePreview = () => {
  const { files, deleteFile } =
    useUpload();

  if (files.length === 0) return null;

  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {files.map((file) => (
        <div
          key={file.id}
          className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2"
        >
          <FileText
            size={18}
            className="text-red-400"
          />

          <div className="flex flex-col">
            <span className="max-w-[160px] truncate text-xs text-zinc-200">
              {file.name}
            </span>

            <span className="text-[10px] text-zinc-500">
              {formatFileSize(file.size)}
            </span>
          </div>

          <button
            onClick={() =>
              deleteFile(file.id)
            }
            className="rounded-md p-1 transition hover:bg-zinc-800"
          >
            <X
              size={14}
              className="text-zinc-400"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilePreview;