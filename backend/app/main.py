from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson import ObjectId
from typing import List

# Initialize the FastAPI app
app = FastAPI()

# Define CORS origins to allow React frontend to access the backend
origins = [
    "http://localhost:3000",  # React frontend URL
]

# Add CORS middleware to the FastAPI app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Configuration
MONGO_URL = "mongodb://localhost:27017"
DATABASE_NAME = "fastleads_db"
COLLECTION_NAME = "content_data"

# Connect to MongoDB
client = MongoClient(MONGO_URL)
db = client[DATABASE_NAME]
content_collection = db[COLLECTION_NAME]

# Define Pydantic model for content data
class ContentData(BaseModel):
    id: str  # MongoDB ObjectId as string
    title: str
    headerIcon: str
    analysisIcon: str
    displayImage: str
    totalCount: int
    totalLabel: str

# Helper to serialize MongoDB ObjectId
def serialize_content(content) -> dict:
    return {
        "id": str(content["_id"]),
        "title": content["title"],
        "headerIcon": content["headerIcon"],
        "analysisIcon": content["analysisIcon"],
        "displayImage": content["displayImage"],
        "totalCount": content["totalCount"],
        "totalLabel": content["totalLabel"],
    }

# Seed some sample data into MongoDB (Run this only once or as needed)
@app.on_event("startup")
async def seed_data():
    if content_collection.count_documents({}) == 0:
        sample_data = [
            {
                "title": "Your Keywords, Trends, Insights",
                "headerIcon": "https://cdn.builder.io/api/v1/image/assets/TEMP/9ad3bb879cc0d2b554e98f5b7a480cffaee04994a36343ef551f656fb3fab679",
                "analysisIcon": "https://cdn.builder.io/api/v1/image/assets/TEMP/0481c4f53061057f9251dd5936e1dc7346e4a72fb56c3b920d15788ed9f23106",
                "displayImage": "https://cdn.builder.io/api/v1/image/assets/TEMP/23ffe100b8bc995f73fb39f26d0d2a119ca9659883f10596f97445971ee61492",
                "totalCount": 2058,
                "totalLabel": "Total Number of Content",
            },
            {
                "title": "Top Performing Content",
                "headerIcon": "https://cdn.builder.io/api/v1/image/assets/TEMP/22d1d1bdabb25683d528d732cf430e915ed93b1a6f3b820be0b04d0249b511c3",
                "analysisIcon": "https://cdn.builder.io/api/v1/image/assets/TEMP/873f7f281fcb157e5bfe39189a2f9f8d5d4e7b0adad665eb36fb516d135411c7",
                "displayImage": "https://cdn.builder.io/api/v1/image/assets/TEMP/baec34b1d2f0322af14bbd1d9e18c2d0ab01b7f89b4b0a79cb5ab915a8e1054c",
                "totalCount": 1504,
                "totalLabel": "Total Number of Leads",
            },
        ]
        content_collection.insert_many(sample_data)

# FastAPI endpoint to fetch all content data
@app.get("/api/content", response_model=List[ContentData])
async def get_all_content():
    contents = content_collection.find()
    return [serialize_content(content) for content in contents]

# FastAPI endpoint to fetch content by ID
@app.get("/api/content/{content_id}", response_model=ContentData)
async def get_content_by_id(content_id: str):
    content = content_collection.find_one({"_id": ObjectId(content_id)})
    if not content:
        raise HTTPException(status_code=404, detail="Content not found")
    return serialize_content(content)

# FastAPI endpoint to add new content data
@app.post("/api/content", response_model=ContentData)
async def add_content(content_data: ContentData):
    new_content = content_data.dict(exclude={"id"})
    result = content_collection.insert_one(new_content)
    new_content["_id"] = result.inserted_id
    return serialize_content(new_content)
