import API_BASE_URL from "../../services/api";

export const uploadFilesAPI =
  async (files) => {

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("file", file);
    });

    const response = await fetch(
      `${API_BASE_URL}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(
        "Upload failed"
      );
    }

    return response.json();
  };

// // FUTURE FASTAPI FILE UPLOAD API

// export const uploadFilesAPI = async (
//   files
// ) => {
//   console.log(files);

//   return {
//     success: true,
//   };
// };