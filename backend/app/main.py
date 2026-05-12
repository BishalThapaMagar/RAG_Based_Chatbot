from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.health import router as health_router
from app.api.chat import router as chat_router
from app.api.upload import router as upload_router
from app.core.database import Base, engine
from app.models.chunk import Chunk


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    debug=settings.DEBUG
)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# check engine
# from app.core.database import engine
# print(engine)

# Routes
app.include_router(health_router)

app.include_router(chat_router)

app.include_router(upload_router)

Base.metadata.create_all(bind=engine)

