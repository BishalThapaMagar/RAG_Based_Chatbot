from app.graph.state import GraphState

from app.rag.retriever import retrieve_chunks

from app.core.database import SessionLocal


def retrieval_node(state: GraphState):

    question = state["question"]

    db = SessionLocal()

    try:

        retrieved_chunks = retrieve_chunks(
            db=db,
            question=question,
            top_k=5
        )

        retrieved_docs = [
            chunk.content
            for chunk in retrieved_chunks
        ]

        return {
            "retrieved_docs": retrieved_docs
        }

    finally:
        db.close()