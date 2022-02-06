""" 
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

Solution
Approach 1: Popping Unwanted Duplicates
Intuition

The input array is already sorted and hence, all the duplicates 
appear next to each other. The problem statement mentions that we a
re not allowed to use any additional space and we have to modify the
 array in-place. The easiest approach for in-place modifications would
  be to get rid of all the unwanted duplicates. For every number in the
   array, if we detect > 2 duplicates, we simply remove them from the 
   list of elements and we do this for all the elements in the array.



Algorithm

1. The implementation is slightly tricky so to say since we will be
 removing elements from the array and iterating over it at the same
  time. So, we need to keep updating the array's indexes as and when 
  we pop an element else we'll be accessing invalid indexes.
2. Say we have two variables, i which is the array pointer and count 
which keeps track of the count of a particular element in the array
. Note that the minimum count would always be 1.

3. We start with index 1 and process one element at a time in the array.

4.If we find that the current element is the same as the previous element 
i.e. nums[i] == nums[i - 1], then we increment the count. If the value 
of count > 2, then we have encountered an unwanted duplicate element
and we can remove it from the array. Since we know the index of this 
element, we can use the del or pop or remove operation (or whatever operation 
corresponding operation is supported in your language of choice) to 
delete the element at index i from the array. Since we popped an 
element, we decrement the index by 1 as well.

5. If we encounter that the current element is not the same as
 the previous element i.e. nums[i] != nums[i - 1], then it means 
 we have a new element at hand and so accordingly, we update count = 1.


6. Since we are removing all the unwanted duplicates from the 
original array, the final array that remains after process all 
the elements will only contain the valid elements and hence we 
simply return the length of this array.




"""


class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Initialize the counter and the array index.
        i, count = 1, 1
        # Start from the second element of the array and process
        # elements one by one.
        while i < len(nums):
            # If the current element is a duplicate,
            # increment the count.
            if nums[i] == nums[i - 1]:
                count += 1
