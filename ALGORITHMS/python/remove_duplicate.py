class Solution(object):
    def remove_duplicates(self, nums):
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
