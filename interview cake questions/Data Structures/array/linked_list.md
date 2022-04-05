# Linked List
Data Structure
Quick reference
	Worst Case
    space 	O(n)
    prepend O(1)
    append 	O(1)
    lookup 	O(n)
    insert 	O(n)
    delete 	O(n)

## A linked list organizes items sequentially, with each item storing a pointer to the next one.

Picture a linked list like a chain of paperclips linked together. It's quick to add another paperclip to the top or bottom. It's even quick to insert one in the middle—just disconnect the chain at the middle link, add the new paperclip, then reconnect the other half.

An item in a linked list is called a node. The first node is called the head. The last node is called the tail.

Confusingly, sometimes people use the word tail to refer to "the whole rest of the list after the head."
A linked list with 3 nodes. The first node is labelled "head" and the last node is labelled "tail."

Unlike an array, consecutive items in a linked list are not necessarily next to each other in memory.
Strengths:

    Fast operations on the ends. Adding elements at either end of a linked list is O(1)O(1)O(1). Removing the first element is also O(1)O(1)O(1).
    Flexible size. There's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.

Weaknesses:

    Costly lookups. To access or edit an item in a linked list, you have to take O(i)O(i)O(i) time to walk from the head of the list to the iiith item.

Uses:

    Stacks and queues only need fast operations on the ends, so linked lists are ideal.

In Python 2.7

Most languages (including Python 2.7) don't provide a linked list implementation. Assuming we've already implemented our own, here's how we'd construct the linked list above:

  a = LinkedListNode(5)
b = LinkedListNode(1)
c = LinkedListNode(9)

a.next = b
b.next = c

Doubly Linked Lists

In a basic linked list, each item stores a single pointer to the next element.

In a doubly linked list, items have pointers to the next and the previous nodes.
A doubly-linked list with 3 nodes. The first node has value 5 with a "next" arrow pointing ahead to the second node and a "previous" arrow pointing back to "None." The second node has value 1 with a "next" arrow pointing ahead to the third node and a "previous" arrow pointing back to the first node. The third node has value 9 with a "next" arrow pointing ahead to "None" and a "previous" arrow pointing back to the second node.

Doubly linked lists allow us to traverse our list backwards. In a singly linked list, if you just had a pointer to a node in the middle of a list, there would be no way to know what nodes came before it. Not a problem in a doubly linked list.
Not cache-friendly

Most computers have caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses.

Array items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they're both theoretically O(n)O(n)O(n) time.



 Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.

The input could, for example, be the variable b below:

  class LinkedListNode(object):

    def __init__(self, value):
        self.value = value
        self.next  = None

a = LinkedListNode('A')
b = LinkedListNode('B')
c = LinkedListNode('C')

a.next = b
b.next = c

delete_node(b)

Gotchas

We can do this in O(1)O(1)O(1) time and space! But our answer is tricky, and it could have some side effects...
Breakdown

It might be tempting to try to traverse the list from the beginning until we encounter the node we want to delete. But in this situation, we don't know where the head of the list is—we only have a reference to the node we want to delete.

But hold on—how do we even delete a node from a linked list in general, when we do have a reference to the first node?

We'd change the previous node's pointer to skip the node we want to delete, so it just points straight to the node after it. So if these were our nodes before deleting a node:
A singly-linked list with 3 nodes. The first node has value 1 and points to the second node, which has value 4 and points to the third node, which has value 0 and points to "None." We're trying to delete the second node.

These would be our nodes after our deletion:
Now, in the same linked list, the first node points to the third node. So the second node will be skipped and no arrows point to it.

So we need a way to skip over the current node and go straight to the next node. But we don't even have access to the previous node!

Other than rerouting the previous node's pointer, is there another way to skip from the previous pointer's value to the next pointer's value?

What if we modify the current node instead of deleting it?
Solution

We take value and next from the input node's next node and copy them into the input node. Now the input node's previous node effectively skips the input node's old value!

So for example, if this was our linked list before we called our function:
A singly-linked list with 3 nodes. The first node has value 3 and points to the second node, which has value 8 and points to the third node, which has value 2 and points to "None." We're trying to delete the second node.

This would be our list after we called our function:
Now, in the same linked list, the second node has value 2 and points to "None." The second node matches the third node, and no arrows point to the third node.

In some languages, like C, we'd have to manually delete the node we copied from, since we won't be using that node anymore. Here, we'll let Python's garbage collector ↴ take care of it.

  def delete_node(node_to_delete):
    # Get the input node's next node, the one we want to skip to
    next_node = node_to_delete.next

    if next_node:
        # Replace the input node's value and pointer with the next
        # node's value and pointer. The previous node now effectively
        # skips over the input node
        node_to_delete.value = next_node.value
        node_to_delete.next  = next_node.next
    else:
        # Eep, we're trying to delete the last node!
        raise Exception("Can't delete the last node with this technique!")

But be careful—there are some potential problems with this implementation:

First, it doesn't work for deleting the last node in the list. We could change the node we're deleting to have a value of None, but the second-to-last node's next pointer would still point to a node, even though it should be None. This could work—we could treat this last, "deleted" node with value None as a "dead node" or a "sentinel node," and adjust any node traversing code to stop traversing when it hits such a node. The trade-off there is we couldn't have non-dead nodes with values set to None. Instead we chose to throw an exception in this case.

Second, this technique can cause some unexpected side-effects. For example, let's say we call:

  a = LinkedListNode(3)
b = LinkedListNode(8)
c = LinkedListNode(2)

a.next = b
b.next = c

delete_node(b)

There are two potential side-effects:

    Any references to the input node have now effectively been reassigned to its next node. In our example, we "deleted" the node assigned to the variable b, but in actuality we just gave it a new value (2) and a new next! If we had another pointer to b somewhere else in our code and we were assuming it still had its old value (8), that could cause bugs.
    If there are pointers to the input node's original next node, those pointers now point to a "dangling" node (a node that's no longer reachable by walking down our list). In our example above, c is now dangling. If we changed c, we'd never encounter that new value by walking down our list from the head to the tail.

Complexity

O(1)O(1)O(1) time and O(1)O(1)O(1) space.
What We Learned

My favorite part of this problem is how imperfect the solution is. Because it modifies the list "in place" it can cause other parts of the surrounding system to break. This is called a "side effect."

In-place operations like this can save time and/or space, but they're risky. If you ever make in-place modifications in an interview, make sure you tell your interviewer that in a real system you'd carefully check for side effects in the rest of the code base.
















 You have a singly-linked list ↴ and want to check if it contains a cycle.

A singly-linked list is built with nodes, where each node has:

    node.next—the next node in the list.
    node.value—the data held in the node. For example, if our linked list stores people in line at the movies, node.value might be the person's name.

For example:

  class LinkedListNode(object):

    def __init__(self, value):
        self.value = value
        self.next  = None

A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

Write a function contains_cycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.
Gotchas

Careful—a cycle can occur in the middle of a list, or it can simply mean the last node links back to the first node. Does your function work for both?

We can do this in O(n)O(n)O(n) time and O(1)O(1)O(1) space!
Breakdown

Because a cycle could result from the last node linking to the first node, we might need to look at every node before we even see the start of our cycle again. So it seems like we can’t do better than O(n)O(n)O(n) runtime.

How can we track the nodes we’ve already seen?

Using a set, we could store all the nodes we’ve seen so far. The algorithm is simple:

    If the current node is already in our set, we have a cycle. Return True.
    If the current node is None we've hit the end of the list. Return False.
    Else throw the current node in our set and keep going.

What are the time and space costs of this approach? Can we do better?

Our runtime is O(n)O(n)O(n), the best we can do. But our space cost is also O(n)O(n)O(n). Can we get our space cost down to O(1)O(1)O(1) by storing a constant number of nodes?

Think about a looping list and a linear list. What happens when you traverse one versus the other?

A linear list has an end—a node that doesn’t have a next node. But a looped list will run forever. We know we don’t have a loop if we ever reach an end node, but how can we tell if we’ve run into a loop?

We can’t just run our function for a really long time, because we’d never really know with certainty if we were in a loop or just a really long list.

Imagine that you're running on a long, mountainous running trail that happens to be a loop. What are some ways you can tell you're running in a loop?

One way is to look for landmarks. You could remember one specific point, and if you pass that point again, you know you’re running in a loop. Can we use that principle here?

Well, our cycle can occur after a non-cyclical "head" section in the beginning of our linked list. So we'd need to make sure we chose a "landmark" node that is in the cyclical "tail" and not in the non-cyclical "head." That seems impossible unless we already know whether or not there's a cycle...

Think back to the running trail. Besides landmarks, what are some other ways you could tell you’re running in a loop? What if you had another runner? (Remember, it’s a singly-linked list, so no running backwards!)

A tempting approach could be to have the other runner stop and act as a "landmark," and see if you pass her again. But we still have the problem of making sure our "landmark" is in the loop and not in the non-looping beginning of the trail.

What if our "landmark" runner moves continuously but slowly?

If we sprint quickly down the trail and the landmark runner jogs slowly, we will eventually "lap" (catch up to) the landmark runner!

But what if there isn't a loop?

Then we (the faster runner) will simply hit the end of the trail (or linked list).

So let's make two variables, slow_runner and fast_runner. We’ll start both on the first node, and every time slow_runner advances one node, we’ll have fast_runner advance two nodes.

If fast_runner catches up with slow_runner, we know we have a loop. If not, eventually fast_runner will hit the end of the linked list and we'll know we don't have a loop.

This is a complete solution! Can you code it up?

Make sure the function eventually terminates in all cases!
Solution

We keep two pointers to nodes (we'll call these “runners”), both starting at the first node. Every time slow_runner moves one node ahead, fast_runner moves two nodes ahead.

If the linked list has a cycle, fast_runner will "lap" (catch up with) slow_runner, and they will momentarily equal each other.

If the list does not have a cycle, fast_runner will reach the end.

  def contains_cycle(first_node):
    # Start both runners at the beginning
    slow_runner = first_node
    fast_runner = first_node

    # Until we hit the end of the list
    while fast_runner is not None and fast_runner.next is not None:
        slow_runner = slow_runner.next
        fast_runner = fast_runner.next.next

        # Case: fast_runner is about to "lap" slow_runner
        if fast_runner is slow_runner:
            return True

    # Case: fast_runner hit the end of the list
    return False

Complexity

O(n)O(n)O(n) time and O(1)O(1)O(1) space.

The runtime analysis is a little tricky. The worst case is when we do have a cycle, so we don't return until fast_runner equals slow_runner. But how long will that take?

First, we notice that when both runners are circling around the cycle fast_runner can never skip over slow_runner. Why is this true?

Suppose fast_runner had just skipped over slow_runner. fast_runner would only be 1 node ahead of slow_runner, since their speeds differ by only 1. So we would have something like this:

  [ ] -> [s] -> [f]

What would the step right before this "skipping step" look like? fast_runner would be 2 nodes back, and slow_runner would be 1 node back. But wait, that means they would be at the same node! So fast_runner didn't skip over slow_runner! (This is a proof by contradiction.)

Since fast_runner can't skip over slow_runner, at most slow_runner will run around the cycle once and fast_runner will run around twice. This gives us a runtime of O(n)O(n)O(n).

For space, we store two variables no matter how long the linked list is, which gives us a space cost of O(1)O(1)O(1).
Bonus

    How would you detect the first node in the cycle? Define the first node of the cycle as the one closest to the head of the list.
    Would the program always work if the fast runner moves three steps every time the slow runner moves one step?
    What if instead of a simple linked list, you had a structure where each node could have several "next" nodes? This data structure is called a "directed graph." How would you test if your directed graph had a cycle?

What We Learned

Some people have trouble coming up with the "two runners" approach. That's expected—it's somewhat of a blind insight. Even great candidates might need a few hints to get all the way there. And that's fine.

Remember that the coding interview is a dialogue, and sometimes your interviewer expects she'll have to offer some hints along the way.

One of the most impressive things you can do as a candidate is listen to a hint, fully understand it, and take it to its next logical step. Interview Cake gives you lots of opportunities to practice this. Don't be shy about showing lots of hints on our exercises—that's what they're there for!
