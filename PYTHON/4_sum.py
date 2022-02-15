""" 
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 

Example 1:

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
Example 2:

Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1
 

Constraints:

n == nums1.length
n == nums2.length
n == nums3.length
n == nums4.length
1 <= n <= 200
-228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228

=========================================================================


This problem is a variation of 4Sum, and we recommend checking that problem first. 
The main difference is that here we pick each element from a different array, while in 4Sum 
all elements come from the same array. For that reason, we cannot use the Two Pointers approach, 
where elements must be in the same sorted array.

On the bright side, we do not need to worry about using the same element twice - we pick 
one element at a time from each array. As you will see later, this help reduce the time complexity.

Finally, we do not need to return actual values and ensure they are unique; we just count each 
combination of four elements that sums to zero.


===============================================================================

A brute force solution will be to enumerate all combinations of elements using four nested loops, which results in O(n4) time complexity.
A faster approach is to use three nested loops, and, for each sum a + b + c, search for a complementary value d == -(a + b + c) in the 
fourth array. We can do the search in O(1) if we populate the fourth array into a hashmap.

Note that we need to track the frequency of each element in the fourth array. If an element 
is repeated multiple times, it will form multiple quadruples. Therefore, we will use hashmap values to store counts.
Building further on this idea, we can observe that a + b == -(c + d). First, we will count sums of elements a + b from
the first two arrays using a hashmap. Then, we will enumerate elements from the third and fourth arrays, and search
for a complementary sum a + b == -(c + d) in the hashmap.


===========================================================================================

Algorithm

For each a in A.

For each b in B.
If a + b exists in the hashmap m, increment the value.
Else add a new key a + b with the value 1.
For each c in C.

For each d in D.
Lookup key -(c + d) in the hashmap m.
Add its value to the count cnt.
Return the count cnt.
"""


class Solution:
    def four_sum_count(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        cnt = 0
        m = collections.defaultdict(int)

