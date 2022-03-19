# BIGGEST NUMBER.................................
def biggestNumber(arr):
    biggestNum = arr[0]
    for index in range(1, len(arr)):
        if arr[index] > biggestNum:
            biggestNum = arr[index]
    return biggestNum


print("Biggest element:", biggestNumber([2, 5, -2, 0, 30]))


# # ........................................................
def findMaxNumRec(array, n):
    if n == 1:
        return array[0]
    return max(array[n-1], findMaxNumRec(array, n-1))


print("MAX NUMREC:", findMaxNumRec([2, -3, -2, 0, 30], 3))


# # ARRAY OF PRODUCTS ........................................................
def array_of_product(array):
    totalProduct = [1] * len(array)
    totalProduct = [1 for _ in range(len(array))]
    for i in range(len(array)):
        currentProduct = 1
        for j in range(len(array)):
            if i != j:
                currentProduct *= array[j]
                totalProduct[i] = currentProduct

    return totalProduct


print("array of Products 1:", array_of_product([5, 1, 4, 2]))


# # O(n) Time | O(n) space
def arrayOfProduct(arr):
    finalProduct,  cp_r, cp_l = [1] * len(arr), [1] * len(arr), [1] * len(arr)
#    # [5, 1, 4, 2]
    cp = 1
    for index in range(0, len(arr)):
        
        cp_l[index] = cp
#         cp *= arr[index]

#      # [5, 1, 4, 2]
#     cp = 1
#     for index in range(len(arr)-1, -1, -1):
      
#         cp_r[index] = cp
#         cp *= arr[index]
#         [1, 1, 1, 1]

#     for index in range(len(arr)):
#         product = cp_l[index] * cp_r[index]
#         finalProduct[index] = product

#     return finalProduct


# print("array of Products 2:", array_of_product([5, 1, 4, 2]))


# # O(n) Time | O(n) space (OPTIMIZED)
# def arrayOfProduct2(arr):
#     finalProduct = [1] * len(arr)

#     # [5, 1, 4, 2]
#     lp = 1
#     for index in range(0, len(arr)):
#         finalProduct[index] *= lp
#         lp *= arr[index]

#      # [5, 1, 4, 2]
#     rp = 1
#     for index in range(len(arr)-1, -1, -1):
#        finalProduct[index] *= rp
#        rp *= arr[index]

#     return finalProduct
# print("array of Products 3:", arrayOfProduct2([5, 1, 4, 2]))
# print("array of Products 3:", arrayOfProduct2([12, 10, 8, 6, 5, 2]))



# def factorial(n):
#     if n < 0: return -1; 
#     elif n == 0: return 1;
#     else: return n * factorial(n-1)

# print("Factorial: ", factorial(1))
