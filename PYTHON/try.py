# # # Python3 program for the above approach

# # # Function to check if the weights
# # # can be delivered in D days or not
# def isValid(weight, n, D, mx):

#     # Stores the count of days required
#     # to ship all the weights if the
#     # maximum capacity is mx
#     st = 1
#     sum = 0

#     # Traverse all the weights
#     for i in range(n):
#         sum += weight[i]

#         # If total weight is more than
#         # the maximum capacity
#         if (sum > mx):
#             st += 1
#             sum = weight[i]

#         # If days are more than D,
#         # then return false
#         if (st > D):
#             return False

#     # Return true for the days < D
#     return True

# # Function to find the least weight
# # capacity of a boat to ship all the
# # weights within D days


# def shipWithinDays(weight, D, n):

#     # Stores the total weights to
#     # be shipped
#     sum = 0

#     # Find the sum of weights
#     for i in range(n):
#         sum += weight[i]

#     # Stores the maximum weight in the
#     # array that has to be shipped
#     s = weight[0]
#     for i in range(1, n):
#         s = max(s, weight[i])

#     # Store the ending value for
#     # the search space
#     e = sum

#     # Store the required result
#     res = -1

#     # Perform binary search
#     while (s <= e):

#         # Store the middle value
#         mid = s + (e - s) // 2

#         # If mid can be shipped, then
#         # update the result and end
#         # value of the search space
#         if (isValid(weight, n, D, mid)):
#             res = mid
#             e = mid - 1

#         # Search for minimum value
#         # in the right part
#         else:
#             s = mid + 1

#     # Print the result
#     print(res)


# # Driver Code
# if __name__ == '__main__':

#     weight = [9, 8, 10]
#     D = 3
#     N = len(weight)

# # shipWithinDays(weight, D, N)
# shipWithinDays([1, 2, 1], 2, 3 )
# shipWithinDays([9, 8, 10], 3, 3 )
# shipWithinDays([1, 5, 4], 3, 3 )


def countSegments(a, n, x):
    flag = False

    count = 0

    # Iterate in the array
    for i in range(n):

        # check if array element greater
        # then X or not
        if (a[i] > x):
            flag = True

        else:

            # if flag is true
            if (flag):
                count += 1

            flag = False

    # After iteration complete
    # check for the last segment
    if (flag):
        count += 1

    return count


# Driver Code
if __name__ == '__main__':
    a =[ 1, 10, 2]
    n = len(a)
    x = 9
    print(countSegments(a, n, x))

print(countSegments([1, 2, 3, 4, 5], 5, 3));
