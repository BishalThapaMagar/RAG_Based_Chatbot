import API_BASE_URL from "../../services/api";

export const uploadFilesAPI =
  async (files, conversationId) => {

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    if (conversationId) {
      formData.append(
        "conversation_id",
        conversationId
      );
    }

    const response = await fetch(
      `${API_BASE_URL}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorBody = await response
        .json()
        .catch(() => null);

      const errorMessage =
        errorBody?.detail ||
        "Upload failed";

      throw new Error(
        Array.isArray(errorMessage)
          ? errorMessage
            .map((error) => error.msg)
            .join(", ")
          : errorMessage
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
