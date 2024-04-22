from fastapi import FastAPI
from order.handler import store_router
from stock.handler import stock_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia a ["http://localhost:3000"] o la dirección de tu Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(store_router, prefix="/api/order", tags=["order"])
app.include_router(stock_router, prefix="/api/stock", tags=["stock"])


@app.get("/")
async def root():
    return {"health-check": "ok"}