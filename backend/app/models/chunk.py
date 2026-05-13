from sqlalchemy import Column, Integer, Text, String
from pgvector.sqlalchemy import Vector

from app.core.database import Base


class Chunk(Base):

    __tablename__ = "chunks"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    chunk_id = Column(
        String,
        unique=True,
        nullable=False
    )

    conversation_id = Column(
        String,
        nullable=True,
        index=True
    )

    content = Column(
        Text,
        nullable=False
    )

    embedding = Column(
        Vector(768)
    )