from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.rag.retriever import retrieve_chunks

from app.rag.prompts import build_rag_prompt

from app.services.llm_service import (
    stream_response
)

from app.core.database import SessionLocal


router = APIRouter()


@router.post("/chat")
async def chat(question: str):

    db = SessionLocal()

    try:

        retrieved_chunks = retrieve_chunks(
            db=db,
            question=question,
            top_k=5
        )

        context = "\n\n".join(
            chunk.content
            for chunk in retrieved_chunks
        )

        prompt = build_rag_prompt(
            question=question,
            context=context
        )

        generator = stream_response(prompt)

        return StreamingResponse(
            generator,
            media_type="text/plain"
        )

    finally:
        db.close()