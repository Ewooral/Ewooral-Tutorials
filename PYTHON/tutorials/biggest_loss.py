'''We want a function which accepts a very large list of prices(pricesLst) and returns the
largest possible loss a client could have made with only a buy transaction followed by a sell
transaction. The largest loss is calculated as pricesLst[index2] - pricesLst[index1] where
index1 < index2.
Please then write tests for this function to ensure it works as expected guarding against all
edge cases you can think of.

'''



from more_itertools import grouper

"""
def grouper(iterable, n, fillvalue=None):
    Collect data into fixed-length chunks or blocks.

    >>> list(grouper('ABCDEFG', 3, 'x'))
    [('A', 'B', 'C'), ('D', 'E', 'F'), ('G', 'x', 'x')]

"""
def largest_possible_loss(prices_list):

    largest_loss = 0

    for purchase, sell in grouper(prices_list, 2):
        loss = abs(purchase) - abs(sell)
        if loss > largest_loss:
           largest_loss = loss

    return largest_loss


how_big_is_the_loss = largest_possible_loss([234, 32, 3, 44, 64, 1])
print(how_big_is_the_loss)
