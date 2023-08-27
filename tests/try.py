def move_element_to_the_end(arr, ele):
    i = 0
    j = len(arr) - 1
    while i < j:
        while i < j and arr[j] == ele:
             j -= 1
        if arr[i] == ele:
            swap(arr, i, j)
        i += 1
       
    return arr
 

def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]

print(move_element_to_the_end([2, 1, 3, 4, 2, 2, 2, 4], 2))
print(move_element_to_the_end([2, 1, 2, 2, 2, 3, 4, 2], 2))
print(move_element_to_the_end([4, 1, 2, 2, 2, 3, 2, 2], 2))



def two_sum(arr, target):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if i == j:
                continue
            if arr[i] + arr[j] == target:
                print([arr[i], arr[j]])
    return []

two_sum([2, 4, -2, 0, 1, 4], target = 2)

"""

[2, 4, -2, 0, 1, 4], target = 2

"""