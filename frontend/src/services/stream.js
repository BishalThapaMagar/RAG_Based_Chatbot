import API_BASE_URL from "./api";

export const streamResponse =
  async ({
    message,

    onChunk,

    onComplete,

    onError,
  }) => {

    try {

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
          "Streaming failed"
        );
      }

      const reader =
        response.body.getReader();

      const decoder =
        new TextDecoder();

      let done = false;

      while (!done) {

        const result =
          await reader.read();

        done = result.done;

        const chunk =
          decoder.decode(
            result.value || new Uint8Array(),
            {
              stream: true,
            }
          );

        if (chunk) {
          onChunk?.(chunk);
        }
      }

      onComplete?.();

    } catch (error) {

      console.error(error);

      onError?.(error);
    }
  };
// // =========================================
// // src/services/stream.js
// // =========================================

// // FRONTEND STREAM HANDLER
// // Works with FastAPI StreamingResponse later

// export const streamResponse = async ({
// //   message, UNCOMMENT THIS LATER

//   onChunk,

//   onComplete,

//   onError,
// }) => {
//   try {
//     // TEMP MOCK STREAM
//     // Replace later with backend fetch()

//     const fakeResponse = `
// # Streaming Response

// This response is arriving token by token.

// - Streaming improves UX
// - Makes AI feel alive
// - Works great for RAG systems

// \`\`\`python
// print("Streaming works!")
// \`\`\`
// `;

//     const words = fakeResponse.split(" ");

//     for (const word of words) {
//       await new Promise((resolve) =>
//         setTimeout(resolve, 40)
//       );

//       onChunk(word + " ");
//     }

//     onComplete?.();
//   } catch (error) {
//     console.error(error);

//     onError?.(error);
//   }
// };