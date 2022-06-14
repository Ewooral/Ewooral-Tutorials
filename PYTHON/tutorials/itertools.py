import operator
import time
from typing import List, Optional
import pydantic
from itertools import (product, combinations, accumulate,
                      chain, count
)                   

class Itertool(pydantic.BaseModel):
    results: Optional [int] 
    group: Optional[List]
    


    def add_on(cls):
        group = [1, 2, 3, 4, 5]
        # a = accumulate(group)
        return list(a)

    def chains(cls):
        co = chain('ABC', 'DEF')
        return list(co)

    def ImCounting(cls):
        for c in count(2, 1):
            if c == 10:
                break
            print(c, end=" ")

    def combine(cls):
        a = combinations("abc", 2)
        return list(a)


        
        

def main():
    # accumulate
    print("...accumulate()...")
    iterr = Itertool()
    print(iterr.add_on())

    # chain
    print("...chain()...")
    re = iterr.chains()
    print(*re)

    # count()
    print("...count()...")
    iterr.ImCounting()

    # combinations
    print("...combinations...")
    print(*iterr.combine())





if __name__ == '__main__':
    main()













'''

print("....................................")
L1 = [1, 2, 3]
L2 = [2, 3, 4]

t1 = time.time()

a, b, c = map(operator.mul, L1, L2)

t2 = time.time()

print("Result:", a, b, c)
print("Time taken by map function: %.6f" % (t2 - t1))

print("......................")
t3 = time.time()
print("Result:", end=" ")
for i in range(3):
    print(L1[i] * L2[i], end=" ")

t4 = time.time()
print("\nTime taken by for loop: %.6f" % (t4 - t3))

t5 = time.time()
print("........Itertool.count()..........")
for c in itertools.count(2, 2):
    if c == 10:
        break
    print(c, end=" ")
t6 = time.time()
print("\nTime taken by for loop: %.6f" % (t6 - t5))

print("....itertools.cycle()....")
count = 0
for i in itertools.cycle('abcd'):
    if count >= 7:
    count > 7: break prints 8
times but count >= 7 prints 7 times
        break
    else:
        print(i, end="")
        count += 1

print("\n....Next function...")
l = ['Geeks', 'for', 'Geeks']
r = [1, 3, 2, 9]
iterators = itertools.cycle(l)
iterators1 = itertools.cycle(r)
for i in range(6):
    # print(next(iterators), end=" ")
    print(next(iterators1), end=" ")
print("\n")
for i in range(6):
    print(next(iterators), end=" ")

print("\n....repeat(val, num)....")
print(list(itertools.repeat(25, 4)))

arr = [2, 3, 1, 9]

print([None] * len(arr))
newList = list(itertools.repeat(None, len(arr)))
newList[1] = 300
print(newList)
print()

print("....combinatoric iterators....")
print()

In python, there are four of them


# 1. Product
print("The cartesian product using repeat:")
print(list(product([1, 2, 6], repeat=1)))
print()
print("The cartesian product of the containers:")
print(list(product(['geeks', 'for', 'geeks'], '2')))
print()
print(list(product('AB', [3, 4])))
print()
for key, value in enumerate(list(product('AB', [3, 4]))):
    print(value[0], "|", value[1])

'''