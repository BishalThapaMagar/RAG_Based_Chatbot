# BLAZE — Fullstack AI RAG Chatbot

A modern fullstack AI-powered RAG (Retrieval-Augmented Generation) chatbot inspired by ChatGPT, Claude, and Perplexity.

Built with:
- React
- Redux Toolkit
- TailwindCSS
- FastAPI
- PostgreSQL
- pgvector
- LangGraph
- Gemini API

---

# Features

# Frontend Features

## Chat Interface
- Modern ChatGPT-style UI
- Real-time streaming responses
- Markdown rendering support
- Multi-conversation chat system
- Typing indicators
- Responsive layout
- Sidebar conversation management

## File Upload System
- PDF upload support
- Drag-and-drop uploads
- File preview chips
- Upload-ready architecture
- Backend-integrated upload system

## Conversation System
- Multiple chats
- Switch between conversations
- Delete conversations
- Auto-generated conversation titles
- Streaming-aware conversations

## Frontend Architecture
- Redux Toolkit state management
- Feature-based scalable architecture
- Streaming-ready design
- Clean separation of UI and business logic
- Modular reusable components

---

# Backend Features

## FastAPI Backend
- Modular FastAPI architecture
- REST API endpoints
- Streaming responses
- CORS configuration
- Environment-based configuration

## LangGraph AI Pipeline
- LangGraph orchestration
- Stateful AI workflow
- Retrieval node
- Generation node
- Streaming-ready graph design

## RAG Pipeline
- PDF ingestion pipeline
- PDF text extraction
- Text chunking
- Embeddings generation
- Semantic retrieval
- Context-grounded generation

## Vector Database
- PostgreSQL integration
- pgvector support
- Vector similarity search
- Semantic document retrieval

## Gemini Integration
- Gemini API integration
- Google embedding models
- Real-time streaming generation
- Grounded AI responses

---

# Tech Stack

# Frontend
- React
- Redux Toolkit
- TailwindCSS
- React Router DOM
- React Markdown
- Lucide React

# Backend
- FastAPI
- LangGraph
- PostgreSQL
- pgvector
- SQLAlchemy
- Google GenAI SDK
- PyMuPDF

---

# Full Project Structure

```bash
project/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── chat/
│   │   │   ├── upload/
│   │   │   └── message/
│   │   │
│   │   ├── features/
│   │   │   ├── chat/
│   │   │   ├── upload/
│   │   │   └── conversations/
│   │   │
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   └── utils/
│   │
│   └── package.json
│
├── backend/
│   │
│   ├── app/
│   │   │
│   │   ├── api/
│   │   │   ├── chat.py
│   │   │   ├── upload.py
│   │   │   └── health.py
│   │   │
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── database.py
│   │   │
│   │   ├── graph/
│   │   │   ├── builder.py
│   │   │   ├── state.py
│   │   │   │
│   │   │   └── nodes/
│   │   │       ├── retrieval_node.py
│   │   │       └── generation_node.py
│   │   │
│   │   ├── services/
│   │   │   ├── llm_service.py
│   │   │   ├── embedding_service.py
│   │   │   ├── vector_service.py
│   │   │   └── pdf_service.py
│   │   │
│   │   ├── rag/
│   │   │   ├── chunking.py
│   │   │   ├── embeddings.py
│   │   │   ├── retriever.py
│   │   │   └── prompts.py
│   │   │
│   │   ├── db/
│   │   │   └── pgvector.py
│   │   │
│   │   ├── models/
│   │   │   ├── chunk.py
│   │   │   └── chat.py
│   │   │
│   │   ├── schemas/
│   │   │   ├── chat.py
│   │   │   └── upload.py
│   │   │
│   │   └── uploads/
│   │       └── pdfs/
│   │
│   ├── requirements.txt
│   ├── run.py
│   └── .env
│
└── README.md
```

---

# Frontend Architecture

## Components
Responsible for:
- UI rendering
- Layouts
- Chat interface
- Upload interface
- Markdown rendering

## Features
Responsible for:
- Redux state
- Business logic
- API communication
- Chat orchestration

## Services
Responsible for:
- Streaming logic
- API configuration
- Backend communication

---

# Backend Architecture

## API Layer
Responsible for:
- HTTP endpoints
- Upload routes
- Chat routes
- Health checks

## Graph Layer
Responsible for:
- LangGraph orchestration
- AI workflow management
- State transitions
- Retrieval/generation flow

## Services Layer
Responsible for:
- Gemini communication
- PDF processing
- Embeddings generation
- Vector operations

## RAG Layer
Responsible for:
- Chunking
- Embeddings
- Retrieval
- Prompt building

## Database Layer
Responsible for:
- PostgreSQL operations
- pgvector integration
- Similarity search
- Data persistence

---

# AI Pipeline Flow

```text
PDF Upload
    ↓
Text Extraction
    ↓
Chunking
    ↓
Embeddings Generation
    ↓
pgvector Storage
    ↓
Similarity Search
    ↓
LangGraph Retrieval Node
    ↓
Gemini Generation Node
    ↓
Streaming Response
```

---

# Current Implemented Features

# Completed Frontend
- Chat UI
- Sidebar
- Multi-chat system
- Markdown rendering
- File upload UI
- Drag/drop uploads
- Redux Toolkit integration
- Streaming architecture
- Typing indicators
- Real backend integration

# Completed Backend
- FastAPI backend
- PostgreSQL integration
- pgvector setup
- LangGraph workflow
- PDF ingestion
- PDF text extraction
- Text chunking
- Google embeddings
- Vector storage
- Semantic retrieval
- Gemini integration
- Real-time streaming responses

---

# Installation

# Clone Repository

```bash
git clone <your-repo-url>
cd project
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend

python -m venv venv

source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

---

# PostgreSQL Setup

Create database:

```sql
CREATE DATABASE ragdb;
```

Enable pgvector:

```sql
CREATE EXTENSION vector;
```

---

# Environment Variables

# Frontend `.env`

```env
VITE_API_URL=http://localhost:8000
```

# Backend `.env`

```env
APP_NAME=RAGGPT Backend
APP_VERSION=1.0.0

POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=ragdb
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

DATABASE_URL=postgresql+psycopg2://user:password@localhost:5432/ragdb

GOOGLE_API_KEY=your_google_api_key

FRONTEND_URL=http://localhost:5173

DEBUG=True
```

---

# Required Backend Packages

```bash
pip install fastapi
pip install uvicorn
pip install sqlalchemy
pip install psycopg2-binary
pip install pgvector
pip install langgraph
pip install langchain
pip install google-genai
pip install pymupdf
pip install python-dotenv
pip install pydantic-settings
```

---

# Streaming Architecture

Frontend:
- Fetch streaming
- Incremental rendering
- Redux live updates

Backend:
- FastAPI StreamingResponse
- Gemini token streaming
- Async response generators

---

# Frontend Design Goals

- Clean AI-chat UX
- Scalable architecture
- Streaming-first design
- Modular components
- Professional dark theme
- Backend-independent frontend logic

---

# Backend Design Goals

- Modular AI architecture
- LangGraph orchestration
- Scalable RAG pipeline
- Clean service separation
- Streaming-first backend
- Expandable multi-agent architecture

---

# Future Improvements

## Frontend
- Syntax-highlighted code blocks
- Better markdown rendering
- Mobile optimization
- Theme customization
- Better streaming animations

## Backend
- Conversation persistence
- Authentication
- User accounts
- Hybrid retrieval
- Reranking
- Source citations
- Multi-PDF retrieval
- Memory systems
- Web search tools
- Background ingestion queues
- Redis caching
- Docker deployment

---

# Future LangGraph Expansion

Possible future nodes:
- memory_node
- query_rewrite_node
- citation_node
- web_search_node
- tool_node

---

# Status

Fullstack MVP completed.

Current capabilities:
- PDF RAG pipeline
- Semantic retrieval
- LangGraph orchestration
- Gemini streaming
- Multi-chat frontend
- Real-time AI responses

---

# Inspiration

Inspired by:
- ChatGPT
- Claude
- Perplexity AI
- Cursor AI
- Modern AI-native UX systems