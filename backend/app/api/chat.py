from fastapi import APIRouter, HTTPException
from fastapi.responses import Response

from app.rag.retriever import retrieve_chunks

from app.rag.prompts import build_rag_prompt

from app.services.llm_service import (
    stream_response
)

from app.core.database import SessionLocal


router = APIRouter()


@router.post("/chat")
async def chat(
    question: str,
    conversation_id: str | None = None
):

    db = SessionLocal()

    try:
        if not question or not question.strip():
            raise HTTPException(
                status_code=400,
                detail="Question cannot be empty"
            )

        retrieved_chunks = retrieve_chunks(
            db=db,
            question=question,
            top_k=5,
            conversation_id=conversation_id
        )

        context = "\n\n".join(
            chunk.content
            for chunk in retrieved_chunks
        )

        prompt = build_rag_prompt(
            question=question,
            context=context
        )

        full_response = "".join(stream_response(prompt))

        return Response(
            content=full_response,
            media_type="text/plain"
        )

    except HTTPException:
        raise
    except Exception as e:
        error_detail = str(e)
        print(
            f"Error in chat endpoint: {type(e).__name__} - {error_detail}"
        )

        if "RESOURCE_EXHAUSTED" in error_detail or "429" in error_detail:
            raise HTTPException(
                status_code=429,
                detail=f"LLM quota exceeded: {error_detail}"
            )

        raise HTTPException(
            status_code=500,
            detail=f"LLM service error: {error_detail}"
        )
    finally:
        db.close()