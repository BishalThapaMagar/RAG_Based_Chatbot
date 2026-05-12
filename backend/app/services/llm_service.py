from google import genai

from app.core.config import settings


client = genai.Client(
    api_key=settings.GOOGLE_API_KEY
)


def stream_response(prompt: str):

    response = client.models.generate_content_stream(
        model="gemini-2.0-flash",
        contents=prompt
    )

    for chunk in response:

        if chunk.text:
            yield chunk.text