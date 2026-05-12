from sqlalchemy.orm import Session

from app.models.chunk import Chunk


def insert_chunk(
    db: Session,
    chunk_data: dict
):

    chunk = Chunk(
        chunk_id=chunk_data["chunk_id"],
        content=chunk_data["content"],
        embedding=chunk_data["embedding"]
    )

    db.add(chunk)

    db.commit()

    db.refresh(chunk)

    return chunk


def similarity_search(
    db: Session,
    query_embedding,
    top_k: int = 5
):

    results = (
        db.query(Chunk)
        .order_by(
            Chunk.embedding.cosine_distance(
                query_embedding
            )
        )
        .limit(top_k)
        .all()
    )

    return results