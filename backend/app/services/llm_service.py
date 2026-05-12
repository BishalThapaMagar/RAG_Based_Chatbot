from google import genai

from app.core.config import settings


client = genai.Client(
    api_key=settings.GOOGLE_API_KEY
)


def stream_response(prompt: str):

    try:
        completion = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )

        if completion and getattr(completion, "text", None):
            yield completion.text
        else:
            raise RuntimeError("No text returned from LLM")

    except Exception as e:
        print(
            f"LLM generation failed: {type(e).__name__}: {e}"
        )
        raise