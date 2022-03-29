
Binary Search Algorithm

A binary search algorithm finds an item in a sorted list in O(lg(n))O(lg(n))O(lg(n)) time.

A brute force search would walk through the whole list, taking O(n)O(n)O(n) time in the worst case.

Let's say we have a sorted list of numbers. To find a number with a binary search, we:

    Start with the middle number: is it bigger or smaller than our target number? Since the list is sorted, this tells us if the target would be in the left half or the right half of our list.
    We've effectively divided the problem in half. We can "rule out" the whole half of the list that we know doesn't contain the target number.
    Repeat the same approach (of starting in the middle) on the new half-size problem. Then do it again and again, until we either find the number or "rule out" the whole set.

We can do this recursively, or iteratively. Here's an iterative version:

  def binary_search(target, nums):
    """See if target appears in nums"""

    # We think of floor_index and ceiling_index as "walls" around
    # the possible positions of our target, so by -1 below we mean
    # to start our wall "to the left" of the 0th index
    # (we *don't* mean "the last index")
    floor_index = -1
    ceiling_index = len(nums)

    # If there isn't at least 1 index between floor and ceiling,
    # we've run out of guesses and the number must not be present
    while floor_index + 1 < ceiling_index:

        # Find the index ~halfway between the floor and ceiling
        # We use integer division, so we'll never get a "half index"
        distance = ceiling_index - floor_index
        half_distance = distance // 2
        guess_index = floor_index + half_distance

        guess_value = nums[guess_index]

        if guess_value == target:
            return True

        if guess_value > target:
            # Target is to the left, so move ceiling to the left
            ceiling_index = guess_index
        else:
            # Target is to the right, so move floor to the right
            floor_index = guess_index

    return False

How did we know the time cost of binary search was O(lg(n))O(lg(n))O(lg(n))? The only non-constant part of our time cost is the number of times our while loop runs. Each step of our while loop cuts the range (dictated by floor_index and ceiling_index) in half, until our range has just one element left.

So the question is, "how many times must we divide our original list size (nnn) in half until we get down to 1?"
n∗12∗12∗12∗12∗...=1 n * \frac{1}{2} * \frac{1}{2} * \frac{1}{2} * \frac{1}{2} * ... = 1 n∗21​∗21​∗21​∗21​∗...=1

How many 12\frac{1}{2}21​'s are there? We don't know yet, but we can call that number xxx:
n∗(12)x=1 n * (\frac{1}{2})^x = 1 n∗(21​)x=1

Now we solve for xxx:
n∗1x2x=1 n * \frac{1^x}{2^x} = 1 n∗2x1x​=1 n∗12x=1 n * \frac{1}{2^x} = 1 n∗2x1​=1 n2x=1 \frac{n}{2^x} = 1 2xn​=1 n=2x n = 2^x n=2x

Now to get the xxx out of the exponent. How do we do that? Logarithms.

Recall that log⁡10100\log_{10}{100}log10​100 means, "what power must we raise 10 to, to get 100"? The answer is 2.

So in this case, if we take the log⁡2\log_{2}log2​ of both sides...
log⁡2n=log⁡22x \log_{2}{n} = \log_{2}{2^x} log2​n=log2​2x

The right hand side asks, "what power must we raise 222 to, to get 2x2^x2x?" Well, that's just xxx.
log⁡2n=x \log_{2}{n} = x log2​n=x

So there it is. The number of times we must divide nnn in half to get down to 1 is log2nlog_{2}nlog2​n. So our total time cost is O(lg(n))O(lg(n))O(lg(n))

Careful: we can only use binary search if the input list is already sorted. 