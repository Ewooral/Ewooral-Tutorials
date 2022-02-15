# Python3 program for the above approach

# # Function to check if the weights
# # can be delivered in D days or not
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
