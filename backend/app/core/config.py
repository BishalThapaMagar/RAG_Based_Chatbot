from pydantic_settings import BaseSettings
from pydantic import field_validator
from functools import lru_cache


class Settings(BaseSettings):
    APP_NAME: str
    APP_VERSION: str

    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_PORT: int

    FRONTEND_URL: str

    DATABASE_URL: str

    DEBUG: bool = False

    OLLAMA_BASE_URL: str = "http://localhost:11434"

    @field_validator("DEBUG", mode="before")
    @classmethod
    def parse_debug(cls, value):
        if isinstance(value, str):
            normalized = value.strip().lower()

            if normalized in {"release", "prod", "production"}:
                return False

            if normalized in {"debug", "dev", "development"}:
                return True

        return value

    class Config:
        env_file = ".env"


@lru_cache
def get_settings():
    return Settings()


settings = get_settings()
