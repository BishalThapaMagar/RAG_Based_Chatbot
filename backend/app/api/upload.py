from fastapi import (
    APIRouter,
    UploadFile,
    File,
    HTTPException,
    Depends
)

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.schemas.upload import UploadResponse

from app.services.pdf_service import (
    save_pdf,
    extract_pdf_text
)

from app.rag.chunking import chunk_text

from app.services.embedding_service import (
    embed_chunks
)

from app.services.vector_service import (
    store_embeddings
)


router = APIRouter()


@router.post(
    "/upload",
    response_model=UploadResponse
)
async def upload_pdf(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files allowed"
        )

    file_path, filename = await save_pdf(file)

    extracted_text = extract_pdf_text(file_path)

    chunks = chunk_text(extracted_text)

    embedded_chunks = embed_chunks(chunks)

    store_embeddings(
        db,
        embedded_chunks
    )

    embedding_dimension = len(
        embedded_chunks[0]["embedding"]
    ) if embedded_chunks else 0

    return UploadResponse(
        filename=filename,
        text_length=len(extracted_text),
        chunk_count=len(embedded_chunks),
        embedding_dimension=embedding_dimension,
        extracted_text=extracted_text[:5000]
    )