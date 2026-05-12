from typing import List, Dict
from uuid import uuid4


def chunk_text(
    text: str,
    chunk_size: int = 800,
    chunk_overlap: int = 150
) -> List[Dict]:

    chunks = []

    start = 0
    text_length = len(text)

    while start < text_length:

        end = start + chunk_size

        chunk_text = text[start:end]

        chunks.append({
            "chunk_id": str(uuid4()),
            "content": chunk_text,
            "start_index": start,
            "end_index": end
        })

        start += chunk_size - chunk_overlap

    return chunks