from fastapi import APIRouter

store_router = APIRouter()


@store_router.get("/add-round")
async def add_round():
    pass


@store_router.get("/")
async def get_order_status():
    return {
        "created": "2024-09-10 12:00:00",
        "paid": False,
        "subtotal": 0,
        "taxes": 0,
        "discounts": 0,
        "items": [],
        "rounds": [
            {
                "created":  "2024-09-10 12:00:30",
                "items": [
                    {
                        "name": "Corona",
                        "quantity": 2
                    },
                    {
                        "name": "Club Colombia",
                        "quantity": 1
                    }
                ]
            },
            {
                "created":  "2024-09-10 12:20:31",
                "items": [
                    {
                        "name": "Club Colombia",
                        "quantity": 1
                    },
                    {
                        "name": "Quilmes",
                        "price": 2
                    }
                ]
            },
            {
                "created":  "2024-09-10 12:43:21",
                "items": [
                    {
                        "name": "Quilmes",
                        "quantity": 3
                    }
                ]
            }

        ]

    }