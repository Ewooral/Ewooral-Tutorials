class Node:
    def __init__(self, value):
        self.value = value
        self.Next = None

    def printNode(self):
        node = self
        while node is not None:
            print(node.value)
            node = node.Next


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def __iter__(self):
        node = self.head
        while node:
            yield node
            node = node.Next

    def __str__(self):
        values = [str(node.value) for node in self]
        return "->".join(values)

    def traverseSLL(self):
        if self.head is None:
            return
        node = self.head
        while node is not None:
            print(node.value)
            node = node.Next

    def insert(self, value, location):
        node = Node(value)
        if self.head is None:
            self.head = node
            self.tail = node
        else:
            if location == 0:
                node.Next = self.head
                self.head = node
            elif location == 1:
                node.next = None
                self.tail.Next = node
                self.tail = node

            else:
                index = 0
                tempNode = self.head
                while index < location - 1:
                    currentNode = tempNode.Next
                    index += 1
                nextNode = currentNode.Next
                node.Next = nextNode
                currentNode.Next = node

    def deleteNode(self, value):
        if self.head is not None:
            if self.head == self.tail:
                self.head = None
                self.tail = None
            else:
                nodeN = self.head
                while nodeN:
                    if nodeN.Next.value == value:
                        curNode = nodeN
                        nexNode = curNode.Next.Next
                        curNode.Next = nexNode
                        return
                    else:
                        nodeN = nodeN.Next
        else:
            print("Linkedlist doesn't exist ")


def main():
    # node = Node(1)
    # nextNode = Node(2)
    # thirdNode = Node(3)
    # node.Next = nextNode
    # nextNode.Next = thirdNode
    # node.printNode()
    ll = LinkedList()
    ll.insert(1, 0)
    ll.insert(2, 0)
    ll.insert(5, 1)
    ll.insert(10, 0)
    ll.insert(6, 2)
    # ll.traverseSLL()
    print(ll.__str__())
    # ll.deleteNode(2)
    # print(ll.__str__())
    ll.deleteNode(10)
    # ll.insert(-9, 3)
    print(ll.__str__())


if __name__ == "__main__":
    main()
