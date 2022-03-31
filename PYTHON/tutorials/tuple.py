# A tuple is an ordered, immutable list of data. it allows duplicate elements
# you can choose to ignore the braces or brackets

# creating a Tuple has O(1) T & O(N) S
from re import I


mytuple = 12, "thirsty", False, .893
for i in mytuple([3, -5, -1]):
     print(i)

    
print(mytuple)
anotherway = tuple(["max", "Jimmy", 200, .90])
newTuple = tuple("eli")
print(anotherway)
print(newTuple)
print("================================")
mytupe = ("max",)  # mytupe qualifies to be a tuple only if a comma is added
print(mytupe)
print(type(mytupe))
# tuples are immutable
# mytuple[0]= "Mary Gadadu"


# Tuples in Memory
# tuples behave like lists in python.





print("================================")
# fetch data from a tuple
mynew = mytuple[-3:]
print("my new tuple: ", mynew)
print("================================")
# iterate over a tuple
for w in mytuple:
    print(w)
print("================================")
# condition check
ek_tuple1 = 1, 2, 3, 4, 5, 6
if 3 in ek_tuple1:
    print("Yes!")
else:
    print("No!")
print("================================")
# useful methods of tuples
# Remember we can choose to ignore the brackes.
ek_tuple2 = 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'c', 'a', 1, 3, 2, 1, 4, 2
print(len(ek_tuple2))
print("================================")
# count elements in a tuple
print(ek_tuple2.count('c'))
# index of an item in a tuple
print(ek_tuple2.index('c'))
print(ek_tuple2.index(2))
print("================================")
# convert tuple to a list
convert_to_list = list(ek_tuple2)
print(convert_to_list)
# convert list to a tuple
convert_to_tuple = tuple(convert_to_list)
print(convert_to_tuple)
print("================================")
# slicing with tuples
ek_b = ek_tuple2[3:5]
print(ek_b)
# this means from the beginning of the list to the end jumping two steps ahead.
ek_c = ek_tuple2[::2]
print(ek_c)

# unpacking
details = "elijah", 29, "Ashaiman"
name, age, address = details
print(name, age, address)

numbers = 1, 3, 2, 2, 55, 6, 3, 2, 4, 55

num1, num2, *num3, num4 = numbers
print(numbers)
