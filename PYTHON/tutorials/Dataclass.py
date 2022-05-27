from dataclasses import dataclass


@dataclass
class Family:
    name: str
    age: int
    address: chr


@dataclass
class InventoryItem:
    """Class for keeping track of an item in inventory."""
    name: str
    unit_price: float
    quantity_on_hand: int = 0

    def total_cost(self) -> float:
        return self.unit_price * self.quantity_on_hand


'''
will add, among other things, a __init__() that looks like:

def __init__(self, name: str, unit_price: float, quantity_on_hand: int = 0):
    self.name = name
    self.unit_price = unit_price
    self.quantity_on_hand = quantity_on_hand
Note that this method is automatically added to the class: 
it is not directly specified in the InventoryItem definition shown above.
'''