from sqlalchemy.orm import Session

from app.db.pgvector import insert_chunk


def store_embeddings(
    db: Session,
    embedded_chunks
):

    stored_chunks = []

    for chunk in embedded_chunks:

        saved_chunk = insert_chunk(
            db,
            chunk
        )

        stored_chunks.append(saved_chunk)

    return stored_chunks