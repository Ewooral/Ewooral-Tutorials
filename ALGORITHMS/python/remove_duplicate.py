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
