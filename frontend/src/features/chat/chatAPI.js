// TEMP MOCK API
// Replace later with FastAPI backend

export const sendMessageAPI = async (
  message
) => {
  console.log("User Message:", message);

  await new Promise((resolve) =>
    setTimeout(resolve, 1500)
  );

  return {
    role: "assistant",

    content: `
# Transformers Architecture

Transformers are deep learning models designed for sequence processing.

## Main Components

- Encoder
- Decoder
- Self Attention
- Feed Forward Networks

## Example Code

\`\`\`python
def hello():
    print("Transformers are powerful")
\`\`\`

## Why Important?

Transformers power:

1. ChatGPT
2. Gemini
3. Claude
4. Perplexity AI

> Attention is all you need.
`,
  };
};