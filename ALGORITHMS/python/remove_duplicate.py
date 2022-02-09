class Solution(object):
    def remove_duplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Initialize the counter and the array index.
        i, count = 1, 1
        container = []
        # Start from the second element of the array and process
        # elements one by one.
        while i < len(nums):

            # If the current element is a duplicate,
            # increment the count.
            if nums[i] == nums[i - 1]:
                count += 1

                # If the count is more than 2, this is an
                # unwanted duplicate element and hence we
                # remove it from the array.

                if count > 2:
                    nums.pop(i)
                    container.append(i)

                    # Note that we have to decrement the
                    # array index value to keep it consistent
                    # with the size of the array.
                    i -= 1
