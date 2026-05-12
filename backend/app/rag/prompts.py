def build_rag_prompt(
    question: str,
    context: str
):

    prompt = f"""
You are a helpful AI assistant.

Answer the user's question ONLY using the provided context.

If the answer is not present in the context,
say:
"I could not find the answer in the provided documents."

Context:
{context}

Question:
{question}

Answer:
"""

    return prompt