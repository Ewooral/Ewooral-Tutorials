# First method to create a 1 D array
N = 5
arr = [0]*N
print(arr)

# Second method to create a 1 D array
N = 5 
arr  = [0 for i in range(N)]
print(arr)

# Using the above first method to create a 2 D array
rows, cols = (5, 5)
arr = [[0]*cols]*rows
#  a = [0] * cols // [0, 0, 0, 0, 0]
# b = [a] * rows // [[a], [a], [a], [a], [a]]
print(arr)

# Using above second method to create a
# 2D array
arr2 = [[0 for i in range(cols)] for j in range(rows)]
print(arr2)


arr3 = []
for i in range(rows):
    col = []
    for j in range(cols):
        col.append(0)
    arr3.append(col)
print(arr3)

arr3[0][0] = 23
print("array three: ", arr3[0][0] )
