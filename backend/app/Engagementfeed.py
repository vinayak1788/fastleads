from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from typing import List
import requests
import csv
from textblob import TextBlob
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import time
from dateutil import parser  # Add this import


API_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAALTbxQEAAAAAj8ESMteW7%2BmNP7ebSdgzj2UyT%2Bo%3DPlL0dx7CT6RGPdpV41tsD7DloRhbRcuJvxjCmqP3iGbT10Rtt2"

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


twitter_data_cache = []
unanswered_comments_cache = []
influencers_cache = []


class FeedItem(BaseModel):
    id: str
    text: str
    user: str
    created_at: datetime
    likes: int
    retweets: int
    platform: str
    sentiment: str


@app.get("/twitter-mentions/", response_model=List[FeedItem])
def get_twitter_mentions(brand: str = Query(default="OpenAI")):
    """
    Fetch Twitter mentions for a given brand, with fallback to CSV data if API fails.
    """
    global twitter_data_cache
    result = []

    try:
        url = "https://api.twitter.com/2/tweets/search/recent"
        headers = {"Authorization": f"Bearer {API_BEARER_TOKEN}"}
        params = {
            "query": f"@{brand}",
            "tweet.fields": "created_at,public_metrics",
            "max_results": 10,
        }
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        data = response.json()
        
        print("Twitter API Response:", data)  # Debugging: Check response

        if "data" in data:
            twitter_data_cache = []
            for tweet in data["data"]:
                sentiment = TextBlob(tweet["text"]).sentiment.polarity
                sentiment_class = (
                    "Positive" if sentiment > 0 else "Negative" if sentiment < 0 else "Neutral"
                )
                metrics = tweet["public_metrics"]
                twitter_data_cache.append({
                    "id": tweet["id"],
                    "text": tweet["text"],
                    "user": "Unknown",
                    "created_at": tweet["created_at"],
                    "likes": metrics["like_count"],
                    "retweets": metrics["retweet_count"],
                    "platform": "Twitter",
                    "sentiment": sentiment_class,
                })

            result = twitter_data_cache
        else:
            print("No 'data' field in Twitter API response.")
            raise HTTPException(status_code=404, detail="No data found in Twitter API response.")

    except requests.exceptions.RequestException as e:
        print(f"Twitter API request error: {e}")  # Debugging: Print request errors
        print("Falling back to cached or CSV data.")

    except Exception as e:
        print(f"Unexpected error: {e}")

    # Fallback to cache or CSV
    if not result:
        print("Falling back to cache or CSV.")
        result = twitter_data_cache
        if not result:
            try:
                csv_path = r"C:\Users\ADMIN\Desktop\engagement\engagement\data\feed_items.csv"
                with open(csv_path, "r", encoding="utf-8") as file:
                    csv_reader = csv.DictReader(file)
                    for row in csv_reader:
                        result.append({
                        "id": row["id"],
                        "text": row["text"],
                        "user": row["user"],
                        "created_at": parser.parse(row["created_at"]),  # Parse string to datetime
                        "likes": int(row["likes"]),
                        "retweets": int(row["retweets"]),
                        "platform": row["platform"],
                        "sentiment": row["sentiment"],
                    })
            except FileNotFoundError:
                raise HTTPException(status_code=404, detail="CSV file not found.")
            except Exception as e:
                raise HTTPException(status_code=500, detail=f"Error reading CSV: {e}")

    return result


@app.get("/unanswered-comments/")
def get_unanswered_comments():
    """
    Return unresolved comments from Twitter data.
    """
    global twitter_data_cache
    unresolved_comments = []

    for item in twitter_data_cache:
        if item["retweets"] == 0 and item["likes"] == 0:  # Example criteria for unanswered
            unresolved_comments.append(
                {
                    "user": item["user"],
                    "text": item["text"],
                    "platform": item["platform"],
                }
            )

    return unresolved_comments[:10]  # Limit to 10 for simplicity



@app.get("/influencers/")
def get_influencers():
    """
    Identify and return top influencers based on Twitter data.
    """
    global twitter_data_cache
    influencers = {}

    for item in twitter_data_cache:
        user = item["user"]
        likes = item["likes"]
        retweets = item["retweets"]

        if user not in influencers:
            influencers[user] = {"followers": 0, "engagement": 0}

        # Assuming likes + retweets define engagement for simplicity
        influencers[user]["engagement"] += likes + retweets

    # Sort influencers by engagement and limit to top 10
    sorted_influencers = sorted(
        influencers.items(),
        key=lambda x: x[1]["engagement"],
        reverse=True
    )
    return [{"rank": i + 1, "name": user, **data} for i, (user, data) in enumerate(sorted_influencers[:10])]



@app.get("/engagement-trends/")
def get_engagement_trends():
    """
    Aggregate data for engagement trends and sentiment distribution.
    """
    global twitter_data_cache
    trends = {"dates": [], "posts": [], "sentiments": {"Positive": 0, "Neutral": 0, "Negative": 0}}

    # Aggregate Twitter API or cached data
    for item in twitter_data_cache:
        date = item["created_at"][:10]  # Extract date (YYYY-MM-DD)
        if date not in trends["dates"]:
            trends["dates"].append(date)
            trends["posts"].append(0)

        index = trends["dates"].index(date)
        trends["posts"][index] += 1

        # Count sentiments
        trends["sentiments"][item["sentiment"]] += 1

    return trends


@app.get("/platform-metrics/")
def get_platform_metrics():
    """
    Aggregate metrics (mentions, likes, retweets) by platform.
    """
    global twitter_data_cache
    metrics = {}

    # Aggregate Twitter data
    for item in twitter_data_cache:
        platform = item["platform"]
        if platform not in metrics:
            metrics[platform] = {"mentions": 0, "likes": 0, "retweets": 0}

        metrics[platform]["mentions"] += 1
        metrics[platform]["likes"] += item["likes"]
        metrics[platform]["retweets"] += item["retweets"]

    # Example fallback for other platforms (if needed in future)
    if "Instagram" not in metrics:
        metrics["Instagram"] = {"mentions": 0, "likes": 0, "retweets": 0}
    if "LinkedIn" not in metrics:
        metrics["LinkedIn"] = {"mentions": 0, "likes": 0, "retweets": 0}

    return metrics
