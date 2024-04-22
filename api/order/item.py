from pydantic import BaseModel


class Item(BaseModel):
    price: int
    quantity: int
    name: str
    id: str


class ItemPayload(BaseModel):
    quantity: int
    id: str
