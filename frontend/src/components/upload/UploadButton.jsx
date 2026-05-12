import { Plus } from "lucide-react";

import useUpload from "../../features/upload/useUpload";

const UploadButton = () => {
  const { handleFiles } = useUpload();

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  return (
    <>
      <label className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition hover:bg-zinc-800">
        <Plus
          size={20}
          className="text-zinc-300"
        />

        <input
          type="file"
          multiple
          accept=".pdf"
          hidden
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default UploadButton;