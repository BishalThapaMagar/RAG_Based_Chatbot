import API_BASE_URL from "../../services/api";

export const sendMessageAPI =
  async (message) => {

    const response = await fetch(
      `${API_BASE_URL}/chat?question=${encodeURIComponent(
        message
      )}`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to send message"
      );
    }

    return response.json();
  };