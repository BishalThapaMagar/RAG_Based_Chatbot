// =========================================
// src/features/chat/chatAPI.js
// =========================================

// TEMP MOCK API
// Replace later with FastAPI backend

export const sendMessageAPI = async (
  message
) => {
  console.log("User:", message);

  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  return {
    reply: `You said: ${message}`,
  };
};