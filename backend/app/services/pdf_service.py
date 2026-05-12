import os
import fitz
from uuid import uuid4
from fastapi import UploadFile


UPLOAD_DIR = "app/uploads/pdfs"


os.makedirs(UPLOAD_DIR, exist_ok=True)


async def save_pdf(file: UploadFile):

    unique_filename = f"{uuid4()}_{file.filename}"

    file_path = os.path.join(
        UPLOAD_DIR,
        unique_filename
    )

    contents = await file.read()

    with open(file_path, "wb") as f:
        f.write(contents)

    return file_path, unique_filename


def extract_pdf_text(file_path: str):

    document = fitz.open(file_path)

    full_text = ""

    for page in document:
        full_text += page.get_text()

    document.close()

    return full_text