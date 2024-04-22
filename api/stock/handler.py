from fastapi import APIRouter, Depends
from stock.service import Stock, get_stock_service

stock_router = APIRouter()


@stock_router.get("/")
async def get_stock(stock_service: Stock = Depends(get_stock_service)):
    return stock_service.get_stock()


