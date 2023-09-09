"""
DESTRUCTURING

Taking a collection, like a list or tuple and unpacking or breaking them up into 
individual values. This allows us to assign values to variables.
"""
i, j = 0, 1
print(i, j)
print("......")

k, l = (2, 3)
print(k, l)
print("......")


"""

Destructuring dictionaries in Python

A dictionary is a collection of key-value pairs, so when destructuring a 
dictionary, things can get a bit confusing!
"""
my_dict = {"name": "bob", "age": 29}

x, y = my_dict
print(x, y)
print(".......")

p, q = my_dict.values()
print(p, q)
print(".....")
"""
Destructuring in for loops

A couple of months back, we wrote a snippet post on enumerate, 
which is a vital component in writing good, Pythonic loops. 
In case you're not familiar, the syntax for enumerate looks like this:
"""

list_of_items = ["A", "B", "C"]

for counter, item in enumerate(list_of_items):
    if item == "C":
        continue
    print(counter, ": ", item)
    print(".....")

people = [
    ("Bob", 42, "Mechanic"),
    ("James", 24, "Artist"),
    ("Harry", 32, "Lecturer")
]

for name, age, profession in people:
    print(f"Name: {name}, Age: {age}, Profession: {profession}")
print(".....")

"""
Ignoring Values

So, what do we do if we have a collection of values and we don't 
want to assign all of them? We can use an _ in place of a variable name.
"""

my_nums = [1, 3, 4, 5]
a, b, _, d = my_nums
print(a, b, d)
print(".....")


for _ in range(3):
    print("Elijah")
print(".....")

"""
Using * to Collect Values

In Python, we can use the * operator to collect leftover values
when performing a destructuring assignment. 
"""

head, *tail = [8, 0, 3, 4, 9, 23]
print(head, tail)
print(".....")

head, *middle, tail = [8, 0, 3, 4, 9, 23]
print(head)
print(middle)
print(tail)
print(".....")


first, second, third, *rest = [1, 2, 3, 4, 5]
print(first)
print(rest)
