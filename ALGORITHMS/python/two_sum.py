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

def two_number_sum(array, target_sum):
    # Write your code here.
    # O(n^2) time complexity
    # O(1) space complexity
    for i in range(len(array)):
        for j in range(i+1, len(array)):
            if array[i] + array[j] == target_sum:
                return [array[i], array[j]]
    return []


print(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 10))
print(two_number_sum([4,6,1,-3], 3))
print(two_number_sum([0,2,4,6,8,10], 12))
print(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 15))

