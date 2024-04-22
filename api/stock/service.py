import json

from api.order.item import ItemPayload


class Stock:
    def __init__(self):
        with open("stock/stock_bd.json", "r") as file:
            self.stock = json.load(file)

    def get_stock(self):
        return self.stock

    def reduce_stock(self, item: ItemPayload):
        print(self.stock["beers"])
        if item.id not in self.stock["beers"]:
            return None, "item does not exist"
        stock_item = self.stock["beers"][item.id]
        if stock_item["stock"] - item.quantity < 0:
            return None, "not enough stock"
        stock_item["stock"] -= item.quantity
        return stock_item, None


service = Stock()


def get_stock_service():
    return service
