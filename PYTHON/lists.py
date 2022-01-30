
# LIST OR ARRAY OF ITEMS
myList = [1, 2, 3, "banana", "Orange", [
    11, 4, 1, 9.22, False, True, 3+3j, 0], False, True, 8.34]
myList[0] = "I recently got interviewed!"
item1 = myList[-1]
print(myList.index("banana"))

# CONDITIONS
if "orange" in myList:
    print("Yes!")
else:
    print("No!")

#Slice( start, end, step)
A = myList[3:3]
B = myList[1:10]
C = myList[1:10:2]
D = myList[1::2]
E = myList[::2]
F = myList[::-1]
print("Answer to myList[3:3] is: ", A)
print("Answer to myList[1:10] is: ", B)
print("Answer to myList[1:10:2] is: ", C)
print("Answer to myList[1::2] is: ", D)
print("Answer to myList[::2] is: ", E)
print("Answer to myList[::-1] is: ", F)  # This is the reverse of the list


myList.append("football")
myList.insert(2, "OleOut!")
myList.pop()

print(len(myList))
# print(item, item1)
print(myList)
# myList.sort()

list_org = ["soup", "eggs", "bread", "milk", "cheese", "butter"]

# pick milk and cheese and copy to new list called list_copy
list_copy = list_org[3:5]
list_copy1 = list_org[:]
list_copy2 = len(list_org)
print("copied list of the original is", list_copy)
print("copied list of the original is", list_copy1)


# COPY LIST: not preferred
list_copy3 = list_org
list_copy3.append("Agushi Soup")

print(list_copy3)
print("Orignal list_copy3 ", list_org)

# The best way to copy
list_copy4 = list_org.copy()
list_copy4.append("Bread with sardin")

print(list_copy4)
print("Original list_org ", list_org)

# creating a new list from an existing list with one line
lotsOfList = [1,2,3,4,5,6]
b = [1*x for x in lotsOfList]

print(lotsOfList)
print(b)


# function that log all pairs of array

numb = [1,2,3]

def printOutNumbersandpair(number):
    for i in number:
        for j in number:
            if i < len(number):
               i = i + 1
            if j < len(number):
               j = j + 1
    return print(number[i], number[j])
        
printOutNumbersandpair(numb)



# lets create a function that finds our name and date of birth in a list



"""
LISTS METHODS 
1. append(item) attaches or inserts an item at the last part of a list.
2. insert(index, item) insert item at a specific index
3. pop() returns the last item of a list and also removes it.
4. remove() removes an item
5. clear() removes all elements from a list.
6. sorted([list]) sorts a copy of the original list/array without affecting 
7. list.sort() sorts the original list/array
"""
