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


