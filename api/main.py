from fastapi import FastAPI
from order.handler import store_router
from stock.handler import stock_router

app = FastAPI()

app.include_router(store_router, prefix="/api/order", tags=["order"])
app.include_router(stock_router, prefix="/api/stock", tags=["stock"])


@app.get("/")
async def root():
    return {"health-check": "ok"}