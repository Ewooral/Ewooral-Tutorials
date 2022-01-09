arr = [1, 2, 8, 2, 2, 2, 5, 1]
fr = [None] * len(arr)
# print(fr)
visited = -1
for i in range(0, len(arr)):
    # print(i)
    count = 1
    for j in range(i + 1, len(arr)):
        # print(j)
        if arr[i] == arr[j]:
            count += 1

# The frequency of an element can be counted using two loops.
#One loop will be used to select an element from an array,
#  and another loop will be used to compare the selected element with the rest of the array.