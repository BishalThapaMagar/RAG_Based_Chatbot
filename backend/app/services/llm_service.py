import requests
import json
from app.core.config import settings


def stream_response(prompt: str):
    try:
        response = requests.post(
            f"{settings.OLLAMA_BASE_URL}/api/generate",
            json={
                "model": "mistral:latest",
                "prompt": prompt,
                "stream": True
            },
            stream=True
        )
        response.raise_for_status()

        for line in response.iter_lines():
            if line:
                data = line.decode('utf-8')
                try:
                    chunk = json.loads(data)
                    if 'response' in chunk:
                        yield chunk['response']
                    if chunk.get('done', False):
                        break
                except json.JSONDecodeError:
                    continue

    except Exception as e:
        print(f"LLM generation failed: {type(e).__name__}: {e}")
        raise