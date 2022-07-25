"""
Amazon ships millions of packages every day. A large percentage
of them are fulfilled by Amazon, so it is important to minimize
shipping costs. it has been found that moving a group of 3 packages
to the shipping facility together is most efficient.
The shipping process needs to be optimized at the new warehouse.
There are the following types of queries or requests:

1. INSERT package_id: insert package_id in the queue of packages
to be shipped

2. SHIP: ship the group of 3 items that were in the queue the earliest
thus, they are returned in the order they entered.

Perform q queries and return a list of lists, one for every SHIP.
The lists are either:
  - 3 package ID strings in the order they were queued.
  - or if there are not enough packages in the queue to fulfill the
  query, the result is ["N/A"]

NOTE:
    1. Initially, the queue is empty.
    2. The list of packages shipped per group should be in
    the order they were queued.
    3. There is at least one query of the 2nd type

EXAMPLE
Perform a series of queries
INSERT package_ids of
       p_id: NJ513501348,
       p_id: GP235136011,
       p_id: ER6245096201
       p_id: NJ7006246135

queue = [NJ513501348, GP235136011, ER6245096201]
warehouse = [[NJ513501348, GP235136011, ER6245096201]]

we can insert at most 3 packages in the queue, if we exceed the number of
packages to be inserted in the queue, we will SHIP the first group
of 3 packages

return [[NJ513501348, GP235136011, ER6245096201]]

FUNCTION DESCRIPTION
Complete the function performWareHouseQueries in the editor below

"""


class WareHouse:
    def __init__(self, size):
        self.max_size = size
        self.wareHouse = []
        self.queue = []

    def insert_in(self, package):
        if self.isFull():
            return "maxsize of queue is reached!"
        self.queue.append(package)
        return "Inserted successfully"

    def isEmpty(self):
        return len(self.queue) == 0

    def isFull(self):
        return len(self.queue) >= self.max_size


def performWareHouseQuery(wH):
    res = []
    if not wH.isFull():
        wH.wareHouse.insert(0, ["N/A"])
        return "Shipment cannot be completed"

    for i in range(len(wH.queue)):
        a = wH.queue.pop(0)
        res.append(a)
        if wH.isEmpty():
            print("queue is empty")
    wH.wareHouse.append(res)
    return wH.wareHouse


ware_house = WareHouse(size=3)
print("....Group 1....")
# insert
print(ware_house.insert_in("NJ513501348"))
print(ware_house.insert_in("GP235136011"))

print("Ship 1")
print(performWareHouseQuery(ware_house))

# insert
print(ware_house.insert_in("ER6245096201"))

print("Ship 2")
print(performWareHouseQuery(ware_house))

print("....Group 2....")
# insert
print(ware_house.insert_in("NJ7006246135"))
print(ware_house.insert_in("NJ7003346199"))

print("Ship 1")
print(performWareHouseQuery(ware_house))

# insert
print(ware_house.insert_in("NJ8994446200"))

print("Ship 2")
print(performWareHouseQuery(ware_house))

print("....Group 3....")
# insert
print(ware_house.insert_in("BF7006246000"))
print(ware_house.insert_in("KU7003346455"))

print("Ship 2")
print(performWareHouseQuery(ware_house))

# insert
# print(ware_house.insert_in("AG8994446900"))

print("Ship 2")
print(performWareHouseQuery(ware_house))

print(ware_house.queue)
