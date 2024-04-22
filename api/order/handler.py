from fastapi import APIRouter, Depends

from order.item import ItemPayload
from order.service import OrderService, get_order_service
from stock.service import Stock, get_stock_service

store_router = APIRouter()


@store_router.put("/add-item")
async def add_item(user_id, item: ItemPayload,
                   order_service: OrderService = Depends(get_order_service),
                   stock_service: Stock = Depends(get_stock_service)):
    return order_service.add_item(item, user_id, stock_service)


@store_router.put("/complete-round")
async def complete_round(user_id, order_service: OrderService = Depends(get_order_service)):
    return order_service.complete_round(user_id)


@store_router.get("/")
async def get_order_status(user_id, order_service: OrderService = Depends(get_order_service)):
    return order_service.get_order_status(user_id)
