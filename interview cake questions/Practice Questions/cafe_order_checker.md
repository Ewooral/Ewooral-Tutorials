

My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

    The take-out orders as they were entered into the system and given to the kitchen. (take_out_orders)
    The dine-in orders as they were entered into the system and given to the kitchen. (dine_in_orders)
    Each customer order (from either register) as it was finished by the kitchen. (served_orders)

Given all three lists, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]

would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

  Take Out Orders: [17, 8, 24]
 Dine In Orders: [12, 19, 2]
  Served Orders: [17, 8, 12, 19, 24, 2]

would be first-come, first-served.

Note: Order numbers are arbitrary. They do not have to be in increasing order.
Gotchas

Watch out for index out of bounds errors! Will your function ever try to grab the 0th item from an empty list, or the nthn^{th}nth item from a list with nnn elements (where the last index would be n−1n-1n−1)?

We can do this in O(n)O(n)O(n) time and O(1)O(1)O(1) additional space.

Did you come up with a recursive solution? Keep in mind that you may be incurring a hidden space cost (probably O(n)O(n)O(n)) in the call stack! ↴ You can avoid this using an iterative approach.
Breakdown

How can we re-phrase this problem in terms of smaller subproblems?

Breaking the problem into smaller subproblems will clearly involve reducing the size of at least one of our lists of customer order numbers. So to start, let's try taking the first customer order out of served_orders.

What should be true of this customer order number if my service is first-come, first-served?

If my cake cafe is first-come, first-served, then the first customer order finished (first item in served_orders) has to either be the first take-out order entered into the system (take_out_orders[0]) or the first dine-in order entered into the system (dine_in_orders[0]).

Once we can check the first customer order, how can we verify the remaining ones?

Let's "throw out" the first customer order from served_orders as well as the customer order it matched with from the beginning of take_out_orders or dine_in_orders. That customer order is now "accounted for."

Now we're left with a smaller version of the original problem, which we can solve using the same approach! So we keep doing this over and over until we exhaust served_orders. If we get to the end and every customer order "checks out," we return True.

How do we implement this in code?

Now that we have a problem that's the same as the original problem except smaller, our first thought might be to use recursion. All we need is a base case. ↴ What's our base case?

We stop when we run out of customer orders in our served_orders. So that's our base case: when we've checked all customer orders in served_orders, we return True because we know all of the customer orders have been "accounted for."

  def is_first_come_first_served(take_out_orders, dine_in_orders, served_orders):
    # Base case
    if len(served_orders) == 0:
        return True

    # If the first order in served_orders is the same as the
    # first order in take_out_orders
    # (making sure first that we have an order in take_out_orders)
    if len(take_out_orders) and take_out_orders[0] == served_orders[0]:
        # Take the first order off take_out_orders and served_orders and recurse
        return is_first_come_first_served(take_out_orders[1:], dine_in_orders, served_orders[1:])

    # If the first order in served_orders is the same as the first
    # in dine_in_orders
    elif len(dine_in_orders) and dine_in_orders[0] == served_orders[0]:
        # Take the first order off dine_in_orders and served_orders and recurse
        return is_first_come_first_served(take_out_orders, dine_in_orders[1:], served_orders[1:])

    # First order in served_orders doesn't match the first in
    # take_out_orders or dine_in_orders, so we know it's not first-come, first-served
    else:
        return False

Python 2.7

This solution will work. But we can do better.

Before we talk about optimization, note that our inputs are probably pretty small. This function will take hardly any time or space, even if it could be more efficient. In industry, especially at small startups that want to move quickly, optimizing this might be considered a "premature optimization." Great engineers have both the skill to see how to optimize their code and the wisdom to know when those optimizations aren't worth it. At this point in the interview I recommend saying, "I think we can optimize this a bit further, although given the nature of the input this probably won't be very resource-intensive anyway...should we talk about optimizations?"

Suppose we do want to optimize further. What are the time and space costs to beat? This function will take O(n2)O(n^2)O(n2) time and O(n2)O(n^2)O(n2) additional space.

Whaaaaat? Yeah. Take a look at this snippet:

  return is_first_come_first_served(take_out_orders[1:], dine_in_orders, served_orders[1:])

Python 2.7

In particular this expression:

  take_out_orders[1:]

Python 2.7

That's a slice, ↴ and it costs O(m)O(m)O(m) time and space, where mmm is the size of the resulting list. That's going to determine our overall time and space cost here—the rest of the work we're doing is constant space and time.

In our recursing we'll build up nnn frames on the call stack. ↴ Each of those frames will hold a different slice of our original served_orders (and take_out_orders and dine_in_orders, though we only slice one of them in each recursive call).

So, what's the total time and space cost of all our slices?

If served_orders has nnn items to start, taking our first slice takes n−1n-1n−1 time and space (plus half that, since we're also slicing one of our halves—but that's just a constant multiplier so we can ignore it). In our second recursive call, slicing takes n−2n-2n−2 time and space. Etc.

So our total time and space cost for slicing comes to:
(n−1)+(n−2)+...+2+1 (n - 1) + (n - 2) + ... + 2 + 1 (n−1)+(n−2)+...+2+1

This is a common series ↴ that turns out to be O(n2)O(n^2)O(n2).

We can do better than this O(n2)O(n^2)O(n2) time and space cost. One way we could to that is to avoid slicing and instead keep track of indices in the list:

  def is_first_come_first_served(take_out_orders, dine_in_orders, served_orders,
                               take_out_orders_index=0, dine_in_orders_index=0,
                               served_orders_index=0):
    # Base case we've hit the end of served_orders
    if served_orders_index == len(served_orders):
        return True

    # If we still have orders in take_out_orders
    # and the current order in take_out_orders is the same
    # as the current order in served_orders
    if ((take_out_orders_index < len(take_out_orders)) and
            take_out_orders[take_out_orders_index] == served_orders[served_orders_index]):
        take_out_orders_index += 1

    # If we still have orders in dine_in_orders
    # and the current order in dine_in_orders is the same
    # as the current order in served_orders
    elif ((dine_in_orders_index < len(dine_in_orders)) and
            dine_in_orders[dine_in_orders_index] == served_orders[served_orders_index]):
        dine_in_orders_index += 1

    # If the current order in served_orders doesn't match
    # the current order in take_out_orders or dine_in_orders, then we're not
    # serving in first-come, first-served order.
    else:
        return False

    # The current order in served_orders has now been "accounted for"
    # so move on to the next one
    served_orders_index += 1
    return is_first_come_first_served(
        take_out_orders, dine_in_orders, served_orders,
        take_out_orders_index, dine_in_orders_index, served_orders_index)

Python 2.7

So now we're down to O(n)O(n)O(n) time, but we're still taking O(n)O(n)O(n) space in the call stack ↴ because of our recursion. We can rewrite this as an iterative function to get that memory cost down to O(1)O(1)O(1).

What's happening in each iteration of our recursive function? Sometimes we're taking a customer order out of take_out_orders and sometimes we're taking a customer order out of dine_in_orders, but we're always taking a customer order out of served_orders.

So what if instead of taking customer orders out of served_orders 1-by-1, we iterated over them?

That should work. But are we missing any edge cases?

What if there are extra orders in take_out_orders or dine_in_orders that don't appear in served_orders? Would our kitchen be first-come, first-served then?

Maybe.

It's possible that our data doesn't include everything from the afternoon service. Maybe we stopped recording data before every order that went into the kitchen was served. It would be reasonable to say that our kitchen is still first-come, first-served, since we don't have any evidence otherwise.

On the other hand, if our input is supposed to cover the entire service, then any orders that went into the kitchen but weren't served should be investigated. We don't want to accept people's money but not serve them!

When in doubt, ask! This is a great question to talk through with your interviewer and shows that you're able to think through edge cases.

Both options are reasonable. In this writeup, we'll enforce that every order that goes into the kitchen (appearing in take_out_orders or dine_in_orders) should come out of the kitchen (appearing in served_orders). How can we check that?

To check that we've served every order that was placed, we'll validate that when we finish iterating through served_orders, we've exhausted take_out_orders and dine_in_orders.
Solution

We walk through served_orders, seeing if each customer order so far matches a customer order from one of the two registers. To check this, we:

    Keep pointers to the current index in take_out_orders, dine_in_orders, and served_orders.
    Walk through served_orders from beginning to end.
    If the current order in served_orders is the same as the current customer order in take_out_orders, increment take_out_orders_index and keep going. This can be thought of as "checking off" the current customer order in take_out_orders and served_orders, reducing the problem to the remaining customer orders in the lists.
    Same as above with dine_in_orders.
    If the current order isn't the same as the customer order at the front of take_out_orders or dine_in_orders, we know something's gone wrong and we're not serving food first-come, first-served.
    If we make it all the way to the end of served_orders, we'll check that we've reached the end of take_out_orders and dine_in_orders. If every customer order checks out, that means we're serving food first-come, first-served.

  def is_first_come_first_served(take_out_orders, dine_in_orders, served_orders):
    take_out_orders_index = 0
    dine_in_orders_index = 0
    take_out_orders_max_index = len(take_out_orders) - 1
    dine_in_orders_max_index = len(dine_in_orders) - 1

    for order in served_orders:
        # If we still have orders in take_out_orders
        # and the current order in take_out_orders is the same
        # as the current order in served_orders
        if take_out_orders_index <= take_out_orders_max_index and order == take_out_orders[take_out_orders_index]:
            take_out_orders_index += 1

        # If we still have orders in dine_in_orders
        # and the current order in dine_in_orders is the same
        # as the current order in served_orders
        elif dine_in_orders_index <= dine_in_orders_max_index and order == dine_in_orders[dine_in_orders_index]:
            dine_in_orders_index += 1

        # If the current order in served_orders doesn't match the current
        # order in take_out_orders or dine_in_orders, then we're not serving first-come,
        # first-served.
        else:
            return False

    # Check for any extra orders at the end of take_out_orders or dine_in_orders
    if dine_in_orders_index != len(dine_in_orders) or take_out_orders_index != len(take_out_orders):
        return False

    # All orders in served_orders have been "accounted for"
    # so we're serving first-come, first-served!
    return True

Complexity

O(n)O(n)O(n) time and O(1)O(1)O(1) additional space.
Bonus

    This assumes each customer order in served_orders is unique. How can we adapt this to handle lists of customer orders with potential repeats?
    Our implementation returns True when all the items in dine_in_orders and take_out_orders are first-come first-served in served_orders and False otherwise. That said, it'd be reasonable to raise an exception if some orders that went into the kitchen were never served, or orders were served but not paid for at either register. How could we check for those cases?
    Our solution iterates through the customer orders from front to back. Would our algorithm work if we iterated from the back towards the front? Which approach is cleaner?

What We Learned

If you read the whole breakdown section, you might have noticed that our recursive function cost us extra space. If you missed that part, go back and take a look.

Be careful of the hidden space costs from a recursive function's call stack! If you have a solution that's recursive, see if you can save space by using an iterative algorithm instead.
