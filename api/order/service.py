import datetime

from api.order.item import ItemPayload, Item
from api.stock.service import Stock


class OrderService:
    def __init__(self):
        self.active_orders = {}
        self.active_round = {}

    def get_order(self, user_id):
        if user_id in self.active_orders:
            return self.active_orders[user_id]
        order = {
            "user_id": user_id,
            "created": datetime.datetime.now().isoformat(),
            "paid": False,
            "subtotal": 0,
            "taxes": 0,
            "discounts": 0,
            "rounds": []
        }
        self.active_orders[user_id] = order
        return self.active_orders[user_id]

    def get_order_status(self, user_id):
        return self.get_order(user_id)

    def complete_round(self, user_id):
        order = self.get_order(user_id)
        if user_id in self.active_round:
            order["rounds"].append(self.active_round[user_id])
            for item in self.active_round[user_id]["items"]:
                order["subtotal"] += item.price * item.quantity
            order["taxes"] = order["subtotal"] * 0.19
            del self.active_round[user_id]

    def add_item(self, item_p: ItemPayload, user_id, stock_service: Stock):
        stock_item, err = stock_service.reduce_stock(item_p)
        if err:
            return err
        if user_id not in self.active_round:
            self.active_round[user_id] = {
                "created": datetime.datetime.now().isoformat(),
                "items": []
            }
        item = Item(name=stock_item["name"], price=stock_item["price"], quantity=item_p.quantity, id=item_p.id)
        self.active_round[user_id]["items"].append(item)
        return None


order_service = OrderService()


def get_order_service():
    return order_service
