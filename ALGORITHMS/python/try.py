
def two_sum(array, target):
    for i in range(len(array)-1):
        first = array[i]
        for j in range(i+1, len(array)):
            second = array[j]
            if(first + second == target):
                return [i, j]
               
                
    return []


print(two_sum([12, 3, 5, 3, 21, 5, 8, 7], 10))
