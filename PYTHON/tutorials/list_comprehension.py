"""
List comprehension is a powerful and concise method for creating lists 
in Python that becomes essential the more you work with lists, and lists of lists.

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Syntax
Consider the following example:

my_new_list = [ expression for item in list ]

You can see from this example that three ingredients are necessary for a python list comprehension to work.

1. First is the expression we'd like to carry out. expression inside the square brackets.
2. Second is the object that the expression will work on. item inside the square brackets.
3. Finally, we need an iterable list of objects to build our new list from. list inside the square brackets.

"""
lists = [1, 2, 3]
letters = ['a', 'b', 'c', 'd', 'e', 'f']
letter = [x for x in letters if x != 'c']
print(letter)
sum = [x + x for x in lists]
print(sum)

s = "fool"
print([x for x in s if x.startswith("o")])


"""
A taste of things to come

In this exercise, you'll explore both the Non-Pythonic and Pythonic ways of looping over a list.

names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman']

Suppose you wanted to collect the names in the above list that have six letters or more. In other programming languages, the typical approach is to create an index variable (i), use i to iterate over the list, and use an if statement to collect the names with six letters or more:

i = 0
new_list= []
while i < len(names):
    if len(names[i]) >= 6:
        new_list.append(names[i])
    i += 1

Let's explore some more Pythonic ways of doing this.
"""
names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman']
i = 0
new_list = []
while i < len(names):
    if len(names[i]) >= 6:
        new_list.append(names[i])
    i += 1
print(new_list)


"""
A more Pythonic approach would loop over the contents 
of names, rather than using an index variable. Print better_list.
""" 
# Print the list created by looping over the contents of names
better_list = []
for name in names:
    if len(name) >= 6:
        better_list.append(name)
print(better_list)

"""
The best Pythonic way of doing this is by using
list comprehension. Print best_list.
"""
print([name for name in names if len(name) >= 6])