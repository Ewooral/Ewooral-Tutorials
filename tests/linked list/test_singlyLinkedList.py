
"""
ALGORITHM
1. Check if the list exits

2. If deletion location is at the beginning of the
SLL:
    - delete if there is only one node in the list
    - If there isn't, traverse the next node.

3. if deletion location is at the end of the SLL:
    - delete if there is only one node in the list
    - else: traverse from the beginning to the last but 1 node
    - check if you're at the last node's position
    - if you are break
    - continue to traverse if you're not.
    - when traversing is done, assign None to the new last node
    - link tail to the new last node.

4. if location is at the middle of the SLL:
    - traverse from the beginning to the node's location

"""
# [30, 1, 2, 9, 3, 4]


class Node:
    def __init__(self, value=None) -> None:
        self.value = value
        self.next = None


class SinglyLL:
    def __init__(self) -> None:
        self.head = None
        self.tail = None

    def __iter__(self):
        node = self.head
        while node:
            yield node
            node = node.next

    def insertSLL(self, value, location):
        newNode = Node(value)
        if self.head is None:
            self.head = newNode
            self.tail = newNode
        else:
            if location == 0:
                newNode.next = self.head
                self.head = newNode
            elif location == 1:
                newNode.next = None
                self.tail.next = newNode
                self.tail = newNode

            else:
                # insert at/in the middle
                index = 0
                prevNode = self.head
                while index < location - 1:
                    currentNode = prevNode.next
                    index += 1
                nextNode = currentNode.next
                newNode.next = nextNode
                currentNode.next = newNode

    def traverseSLL(self):
        if self.head is None:
            return
        node = self.head
        while node is not None:
            print(node.value)
            node = node.next

    def searchSLL(self, nodeValue):
        if self.head is None:
            print("List doesn't exit")
        else:
            node = self.head
            while node is not None:
                if node.value == nodeValue:
                    print(node.head.value)
                node = node.next
            return "node value not found"

    def deleteSLL(self, location):
        if self.head is None:
            print("List doesn't exit")

        else:
            if location == 0:
                if self.head == self.tail:
                    self.head = None
                    self.tail = None
                else:
                    self.head = self.head.next
            elif location == 1:  # the end of list
                if self.head == self.tail:
                    self.head = None
                    self.tail = None
                else:
                    prevNode = self.head
                    while prevNode is not None:
                        if prevNode.next == self.tail:
                            break
                        prevNode = prevNode.next
                    prevNode.next = None
                    self.tail = prevNode
            else:
                tempNode = self.head
                index = 0
                while index < location - 1:
                    tempNode = prevNode.next
                    index += 1
                nextNode = tempNode.next
