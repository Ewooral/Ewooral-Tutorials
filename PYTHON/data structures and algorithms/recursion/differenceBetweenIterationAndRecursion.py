# Recursion 
def powerOfTwo(n):
    if n == 0: 
        return 1; 
    else:  
        # print(powerOfTwo(n-1) * 2)
        return powerOfTwo(n-1) * 2

print(powerOfTwo(4))



 
def factorial(n):
    assert n >= 0 and int(n) == n, 'The number must be positive integer only!';
#     if n in [0, 1]:
#         return 1;
#     else: return n * factorial(n-1) 

# print(factorial(4))
# print(factorial(0))
# print(factorial(1))
# print(factorial(-10))