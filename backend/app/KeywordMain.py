from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
import requests
from bs4 import BeautifulSoup
import os
from dotenv import load_dotenv
from pathlib import Path

# Get the current directory and load .env filecurrent_dir = Path(__file__).resolve().parent
# env_path = 'backend\.env'
# load_dotenv(dotenv_path=env_path)
current_dir = Path(__file__).resolve().parent
env_path = current_dir / '.env'
load_dotenv(dotenv_path=env_path)
# Get API key from environment variable
# Update this line
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/"],
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini Pro
genai.configure(api_key='AIzaSyBDr-lQzfnbT5P2Ave2R3zWXr8MiQws-14')
model = genai.GenerativeModel('gemini-pro')

class WebsiteInput(BaseModel):
    url: str

@app.post("/analyze")
async def analyze_website(input: WebsiteInput):
    try:
        # Add headers to mimic a browser request
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        # Fetch content with headers and increased timeout
        response = requests.get(input.url, headers=headers, timeout=30)
        response.raise_for_status()  # This will raise an exception for HTTP errors
        
        soup = BeautifulSoup(response.text, 'html.parser')
        # Remove script and style elements
        for script in soup(["script", "style"]):
            script.decompose()
        text = soup.get_text(separator=' ', strip=True)
        
        if not text:
            raise HTTPException(status_code=400, detail="No content found on the webpage")

        # Split text into chunks for processing
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len,
            separators=["\n\n", "\n", " ", ""]
        )
        splits = text_splitter.split_text(text)
        
        if not splits:
            raise HTTPException(status_code=400, detail="Could not process webpage content")
            
        content = " ".join(splits[:5])  # Take first 5 chunks to avoid token limits
        
        prompt = f"""
        Analyze the following content and provide:
        1. Key bullet points (maximum 5)
        2. Relevant hashtags (maximum 8)
        3. Relevant taglines (maximum 8)
        Content: {content}
        """
        
        response = model.generate_content(prompt)
        
        if not response:
            raise HTTPException(status_code=500, detail="Failed to generate analysis")
            
        return {"response": response.text}
    
    except requests.RequestException as e:
        raise HTTPException(status_code=400, detail=f"Error fetching website: {str(e)}")
    except Exception as e:
        print(f"Debug - Error details: {str(e)}")  # Add logging for debugging
        raise HTTPException(status_code=500, detail=f"Error processing website: {str(e)}")

@app.get("/")
async def root():
    return {
        "message": "Welcome to the Website Analysis API",
        "endpoints": {
            "POST /analyze": "Analyze a website by providing a URL",
        },
        "status": "online"
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "api_version": "1.0"
    }
