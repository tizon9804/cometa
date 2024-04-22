from fastapi import APIRouter

stock_router = APIRouter()


@stock_router.get("/")
async def get_stock():
    return {
        "last_updated": "2024-09-10 12:00:00",
        "beers": [
            {
                "name": "Corona",
                "price": 115,
                "quantity": 2
            },
            {
                "name": "Quilmes",
                "price": 120,
                "quantity": 0
            },
            {
                "name": "Club Colombia",
                "price": 110,
                "quantity": 3
            }
        ]

    }


