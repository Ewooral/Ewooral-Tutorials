'''We want a function which accepts a very large list of prices(pricesLst) and returns the
largest possible loss a client could have made with only a buy transaction followed by a sell
transaction. The largest loss is calculated as pricesLst[index2] - pricesLst[index1] where
index1 < index2.
Please then write tests for this function to ensure it works as expected guarding against all
edge cases you can think of.'''



from more_itertools import grouper


def find_biggest_loss(prices_list):

    biggest_loss = 0

    for buy, sell in grouper(prices_list, 2):
        loss = abs(buy) - abs(sell)
        if loss > biggest_loss:
            biggest_loss = loss

    return biggest_loss
