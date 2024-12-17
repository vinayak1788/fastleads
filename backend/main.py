from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import psycopg
from fastapi.responses import JSONResponse

# Database connection configuration
DB_CONFIG = {
    "host": "localhost",
    "dbname": "Leaddb",
    "user": "postgres",
    "password": "tiger",
    "port": 5432
}

# FastAPI app initialization
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for User input/output
class User(BaseModel):
    platform: str
    name: str
    email: EmailStr
    phone: str
    location: str
    priority: str

# Helper function to get the DB connection
def get_db_connection():
    return psycopg.connect(**DB_CONFIG)

# Endpoint to get all users
@app.get("/users", response_model=list[User])
async def get_users():
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT platform, name, email, phone, location, priority
                    FROM social_media_users;
                """)
                users = cur.fetchall()
                return [
                    {
                        "platform": u[0],
                        "name": u[1],
                        "email": u[2],
                        "phone": u[3],
                        "location": u[4],
                        "priority": u[5],
                    }
                    for u in users
                ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching users: {str(e)}")

# Endpoint to add a new user
@app.post("/users", response_model=User)
async def add_user(user: User):
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO social_media_users (platform, name, email, phone, location, priority)
                    VALUES (%s, %s, %s, %s, %s, %s);
                    """,
                    (user.platform, user.name, user.email, user.phone, user.location, user.priority)
                )
                conn.commit()
                return user
    except psycopg.errors.UniqueViolation:
        raise HTTPException(status_code=400, detail="Email or phone number already exists.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error adding user: {str(e)}")

# Endpoint to get a single user by email
@app.get("/users/{email}", response_model=User)
async def get_user(email: str):
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT platform, name, email, phone, location, priority
                    FROM social_media_users WHERE email = %s;
                """, (email,))
                user = cur.fetchone()
                if not user:
                    raise HTTPException(status_code=404, detail="User not found.")
                return {
                    "platform": user[0],
                    "name": user[1],
                    "email": user[2],
                    "phone": user[3],
                    "location": user[4],
                    "priority": user[5],
                }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching user: {str(e)}")

# Endpoint to update user details by email
@app.put("/users/{email}")
async def update_user(email: str, user: User):
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE social_media_users
                    SET platform = %s, name = %s, email = %s, phone = %s,
                        location = %s, priority = %s
                    WHERE email = %s;
                    """,
                    (user.platform, user.name, user.email, user.phone, user.location, user.priority, email)
                )
                if cur.rowcount == 0:
                    raise HTTPException(status_code=404, detail="User not found.")
                conn.commit()
                return JSONResponse(content={"message": "User updated successfully."})
    except psycopg.errors.UniqueViolation:
        raise HTTPException(status_code=400, detail="Email or phone number already exists.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error updating user: {str(e)}")

# Endpoint to delete a user by email
@app.delete("/users/{email}")
async def delete_user(email: str):
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM social_media_users WHERE email = %s;", (email,))
                if cur.rowcount == 0:
                    raise HTTPException(status_code=404, detail="User not found.")
                conn.commit()
                return JSONResponse(content={"message": "User deleted successfully."})
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting user: {str(e)}")

# Endpoint to get leads data for the line chart
@app.get("/leads", response_model=list[dict])
async def get_leads_data():
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT EXTRACT(MONTH FROM created_at) AS month, COUNT(*) AS leads
                    FROM social_media_users
                    GROUP BY month
                    ORDER BY month;
                """)
                leads = cur.fetchall()
                return [
                    {"name": int(row[0]), "leads": int(row[1])} for row in leads
                ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching leads data: {str(e)}")

# Endpoint to get priority data for the pie chart
@app.get("/priorities", response_model=list[dict])
async def get_priorities_data():
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT priority, COUNT(*)::float / SUM(COUNT(*)) OVER () * 100 AS percentage
                    FROM social_media_users
                    GROUP BY priority;
                """)
                priorities = cur.fetchall()
                color_mapping = {"High": "#ef4444", "Medium": "#f59e0b", "Low": "#10b981"}
                return [
                    {
                        "name": row[0],
                        "value": round(row[1], 2),
                        "color": color_mapping.get(row[0], "#000000")
                    } for row in priorities
                ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching priorities data: {str(e)}")
