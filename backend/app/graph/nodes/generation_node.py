from app.graph.state import GraphState

from app.rag.prompts import build_rag_prompt

from app.services.llm_service import (
    generate_response
)


def generation_node(state: GraphState):

    question = state["question"]

    docs = state["retrieved_docs"]

    combined_context = "\n\n".join(docs)

    prompt = build_rag_prompt(
        question=question,
        context=combined_context
    )

    response = generate_response(prompt)

    return {
        "response": response
    }