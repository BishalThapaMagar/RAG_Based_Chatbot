from pydantic import BaseModel


class UploadResponse(BaseModel):
    filename: str
    text_length: int
    chunk_count: int
    embedding_dimension: int
    extracted_text: str
