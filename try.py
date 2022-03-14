def moveZeroes(arr):
    count_nonzero_elements = 0
    n = len(arr)
    for element in arr:
        if element != 0:
            arr[count_nonzero_elements] = element
            count_nonzero_elements += 1

    for j in range( n):
        arr[j] = 0

    return arr


array = [0, 1, 0, 3, 12]
print(moveZeroes(array))

""" Example:      0 1 0 3 12 

#  Expected Output: 1 3 12 0 0

#  We are to push all zeros to the end of the array and 
#  maintain the order of the non zero elements in the array
# """

  
