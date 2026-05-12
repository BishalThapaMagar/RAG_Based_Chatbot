from app.rag.embeddings import generate_embedding


def embed_chunks(chunks):

    embedded_chunks = []

    for chunk in chunks:

        embedding = generate_embedding(
            chunk["content"]
        )

        embedded_chunks.append({
            **chunk,
            "embedding": embedding
        })

    return embedded_chunks