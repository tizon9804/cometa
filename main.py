from fastapi import FastAPI
from order.handler import store_router

app = FastAPI()

app.include_router(store_router, prefix="/api/stores", tags=["stores"])


@app.get("/")
async def root():
    return {"health-check": "ok"}