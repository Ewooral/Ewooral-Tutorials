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
print(arr)

rows1, cols2 = {0:"rows", 1:"cols"}
print(rows)
print(cols2)
