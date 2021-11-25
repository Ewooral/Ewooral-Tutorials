# inputs
from more_itertools import grouper


def find_biggest_loss(prices_list):

    biggest_loss = 0

    for buy, sell in grouper(prices_list, 2):
        loss = abs(buy) - abs(sell)
        if loss > biggest_loss:
            biggest_loss = loss

    return biggest_loss
