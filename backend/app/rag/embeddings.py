import requests
from app.core.config import settings


def generate_embedding(text: str):
    response = requests.post(
        f"{settings.OLLAMA_BASE_URL}/api/embeddings",
        json={
            "model": "nomic-embed-text",
            "prompt": text
        }
    )
    response.raise_for_status()
    data = response.json()
    return data["embedding"]