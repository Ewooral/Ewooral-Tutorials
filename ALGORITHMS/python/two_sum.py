'''TWO NUMBER sum
Write a function that takes in a non-empty array of distinct integers 
and an integer representing a target sum. If any two numbers in the array sum
up to the target sum, the function should return them in an array, 
in any order. If no two numbers sum up to the target sum, 
the function should return an empty array.

SAMPLE INPUT
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

'''

from operator import ne


def two_number_sum(array, target_sum):
    # Write your code here. 
    # O(n^2) time complexity
    # O(1) space complexity
    for i in range(len(array)):
        current = array[i]
        for j in range(i+1, len(array)):
            next_value = array[j]
            if current + next_value == target_sum:
                return [current, next_value]
    return []


print(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 10))
print(two_number_sum([4,6,1,-3], 3))
print(two_number_sum([0,2,4,6,8,10], 12))
print(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 15))

# APPROACH TWO - Two sum using hash table
# x + y = target_sum
# x = target_sum - y
# y = current

class two_number_sum:
    def two_number_sum_hash(array, target_sum):
        # Write your code here. 
        # O(n) time complexity
        # O(n) space complexity
        hash_table = {}
        for i in range(len(array)):
            current = array[i]
            if target_sum - current in hash_table:
                return [current, target_sum - current]
            else:
                hash_table[current] = True
        return []
# instance of the class 
two_sum = two_number_sum()
print(two_sum.two_number_sum_hash([3, 5, -4, 8, 11, 1, -1, 6], 10))
print(two_sum.two_number_sum_hash([4,6,1,-3], 3))
