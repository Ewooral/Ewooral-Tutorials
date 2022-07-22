from timeit import timeit
from math import factorial

print(".........")
print("SPEED TEST")
print(".........")
print()
'''
SPEED COMPARISON OF FACTORIAL IMPLEMENTATIONS

To evaluate execution time, you can use a function called timeit() from a module 
that is also called timeit. This function supports a number of different formats,
 but you'll use the following format in this tutorial:

timeit(<command>, setup=<setup_string>, number=<iterations>)
timeit() first executes the commands contained in the specified <setup_string>. 
Then it executes <command> the given number of <iterations> and reports the 
cumulative execution time in seconds:
'''


# FACTORIAL
setup_str = """
from math import factorial
print("In-built factorial function: ")
factorial(4)
"""
print(timeit("factorial(4)", setup=setup_str, number=100000))


print("........")
setup_string = """
from functools import reduce
print("reduce():")
def factorial(n):
     return reduce(lambda x, y: x * y, range(1, n + 1) or [1])
"""
print(timeit("factorial(4)", setup=setup_string, number=100000))


print("......................")
setup_string2 = """
from sys import setrecursionlimit
def reLimit():
    return setrecursionlimit(200000)
print("Recursion with Hash table: ")
def fact(n, hash_table = {}):
    reLimit() # this sets the recursive limit to 200
    if n <= 0:
        return 1
    if n not in hash_table:
        hash_table[n] = n * fact(n - 1)
    return hash_table[n]

"""
print(timeit("fact(4)", setup=setup_string2, number=100000))


print("......................")
setup_string2A = """
print("recursion without hash table")
def fact(n):
    if n <= 0:
        return 1
    
    return n * fact(n - 1)
"""
print(timeit("fact(4)", setup=setup_string2A, number=100000))


print("......................")
setUp_String3 = """
print("Iterative: ")
def factorial(n):
    return_value = 1
    for i in range(2, n + 1):
        return_value *= i
    return return_value
"""
print(timeit("factorial(4)", setup=setUp_String3, number=100000))


# print(timeit("print(string)", setup="string='foobar'", number=10))





# TEST IN-BUILT LEN VRS HARD-CODED LENGTH FUNCTIONS
print("...............")
lengthOfList = """
from typing import List
customList = [1, 3, 2, 5, 0]
def length(n: List[int]) -> int:
    Length = 0
    for i in n:
        Length = Length + 1
    return Length

print(length(customList))

"""

print(timeit("length(customList)", setup=lengthOfList, number=1000000))


print(".............")
lengthOfListA = """
customList = [1, 3, 2, 5, 0]
print(len(customList))
"""
print(timeit("len(customList)", setup=lengthOfListA, number=1000000))



# ARRAY OF PRODUCT
print(".............")
arrayOfP = """
print("Array of Products 1: ")
intArr = [5, 1, 4, 2]

def arrayOfProduct2(arr):
    finalProduct = [1] * len(arr)

    # [5, 1, 4, 2]
    lp = 1
    for index in range(0, len(arr)):
        finalProduct[index] *= lp
        lp *= arr[index]

    # [5, 1, 4, 2]
    rp = 1
    for index in range(len(arr)-1, -1, -1):
       finalProduct[index] *= rp
       rp *= arr[index]

    return finalProduct
"""
print(timeit("arrayOfProduct2(intArr)", setup=arrayOfP, number=100000))


print(".............")
arrayOfPA = """
print("Array of Products 2: ")
intArr = [5, 1, 4, 2]
def array_of_product(array):
    hash_t = {}
    totalProduct = [1] * len(array)
    totalProduct = [1 for _ in range(len(array))]
    for i in range(len(array)):
        currentProduct = 1
        for j in range(len(array)):
            if array[j] in hash_t:
                if i != j:
                    currentProduct *= array[j]
                    totalProduct[i] = currentProduct
            else:
                hash_t[j] = array[j]

    return totalProduct
"""
print(timeit("array_of_product(intArr)", setup=arrayOfPA, number=10))


print("..............")

traverse_list = """
names = ['Adam', ['Bob', ['Chet', 'Cat'], 'Barb', 'Bert'], 'Alex', ['Bea', 'Bill'], 'Ann']
print("traverse list recursively: ")
def traverse(names):
    for name in names:
        if isinstance(name, list):
            traverse(name)
        else: print(name)
    return

"""
print(timeit("traverse(names)", setup=traverse_list, number=1))


