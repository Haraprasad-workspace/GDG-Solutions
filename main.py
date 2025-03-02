from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv

load_dotenv()  # Load API key from .env file

app = FastAPI()

openai.api_key = os.getenv("OPENAI_API_KEY")

class Assignment(BaseModel):
    text: str

@app.post("/get-feedback")
async def get_feedback(assignment: Assignment):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": f"Evaluate this assignment: {assignment.text}. Give a score and feedback."}]
        )
        feedback = response["choices"][0]["message"]["content"]
        return {"feedback": feedback}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Start server: uvicorn main:app --reload
