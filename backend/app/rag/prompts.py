def build_rag_prompt(
    question: str,
    context: str
):

    prompt = f"""
You are a helpful AI assistant with access to document context.

When answering the user's question:
1. If the answer is clearly present in the provided documents, prioritize that information and reference it.
2. If the documents don't contain relevant information, provide a general knowledge answer.
3. When using document information, feel free to enhance it with related context or explanations.
4. Be transparent about whether your answer comes from the provided documents or from general knowledge.

Document Context:
{context}

User Question:
{question}

Answer:
"""

    return prompt