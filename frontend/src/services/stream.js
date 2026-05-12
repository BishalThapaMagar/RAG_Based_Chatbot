// =========================================
// src/services/stream.js
// =========================================

// FRONTEND STREAM HANDLER
// Works with FastAPI StreamingResponse later

export const streamResponse = async ({
//   message, UNCOMMENT THIS LATER

  onChunk,

  onComplete,

  onError,
}) => {
  try {
    // TEMP MOCK STREAM
    // Replace later with backend fetch()

    const fakeResponse = `
# Streaming Response

This response is arriving token by token.

- Streaming improves UX
- Makes AI feel alive
- Works great for RAG systems

\`\`\`python
print("Streaming works!")
\`\`\`
`;

    const words = fakeResponse.split(" ");

    for (const word of words) {
      await new Promise((resolve) =>
        setTimeout(resolve, 40)
      );

      onChunk(word + " ");
    }

    onComplete?.();
  } catch (error) {
    console.error(error);

    onError?.(error);
  }
};