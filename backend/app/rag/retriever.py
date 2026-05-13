from sqlalchemy.orm import Session

from app.rag.embeddings import generate_embedding
from app.db.pgvector import similarity_search


def retrieve_chunks(
    db: Session,
    question: str,
    top_k: int = 5,
    conversation_id: str | None = None
):

    query_embedding = generate_embedding(question)

    results = similarity_search(
        db=db,
        query_embedding=query_embedding,
        top_k=top_k,
        conversation_id=conversation_id
    )

    return results