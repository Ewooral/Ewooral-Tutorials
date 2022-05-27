
"""
A Lambda Function in Python programming
is an anonymous function or a function having no name

In Python, lambda expressions (or lambda forms) are
utilized to construct anonymous functions. To do so, 
you will use the lambda keyword 
(just as you use def to define normal functions)

SYNTAX:
lambda p1, p2: expression

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

IIFE in Python Lambda
IIFE stands for immediately invoked function execution. 
It means that a lambda function is callable as soon as it is defined. 
Let's understand this with an example; fire up your IDLE and type in
the following:

(lambda x: x + x)(2)

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''



"""
from functools import reduce
# THIS 
def sum(a, b):
    return a + b
print(sum(2, 3))

# OR
(lambda a, b: print(a + b))(2, 3)

print((lambda x: x + x)(2))

def increment_by_II(x):
    for i in range(10):
        x = x + i


increment_by_i = [lambda x: x + i for i in range(10)]
print("increamented value: ", increment_by_i[3](4))


string = 'some kind of a useless lambda'
(lambda y: print(y))(string)

(lambda x: print(x))(string)

print(list(map(lambda x: x[:2], ['red', 'green', 'blue'])))
print(list(map(lambda x: x[::-1], ['red', 'green', 'blue'])))
print(list(map(lambda x: x[::], ['red', 'green', 'blue'])))

""" 
lambdas in filter()

The filter function is used to select some particular elements from a
sequence of elements. The sequence can be any iterator like lists, sets,
tuples, etc.

The elements which will be selected is based on some pre-defined
constraint. It takes 2 parameters:

A function that defines the filtering constraint
A sequence (any iterator like lists, tuples, etc.)
"""
sequences = [10, 2, 8, 7, 5, 4, 11, 0, 1] 


filtered_sequences = filter(lambda x: x % 2 == 0, sequences)
filtered_sequences_I = filter(lambda x: x > 4, sequences)
print(list(filtered_sequences))
print(list(filtered_sequences_I))


students = ["Elijah", "Mary", "John", "Ishmael", "Hannah"]
# filter out names of talkertives 

names_of_talkertives = filter(lambda x: x in students[2:4], students)
print(list(names_of_talkertives))


name = [x for x in students if x=="Mary"]
print("These are the lists of talkertives: " ,name)


""" 
lambdas in map(function, iterables)
the map function is used to apply a particular operation to every element 
in a sequence. Like filter(), it also takes 2 parameters:

A function that defines the op to perform on the elements
One or more sequences

"""
urinators_scores = [10, 2, 8, 7, 5, 4, 3, 11, 0, 1]
doubled_urinators_scores = map(lambda x: x*x, urinators_scores)
print("Urinators scores doubled: " , list(doubled_urinators_scores))

""" 
Code Explanation:

Here, we define a list called sequences which contains some numbers.
We declare a variable called filtered_result which will store the mapped values
A lambda function which runs on each element of the list and returns the square of that number.
Print the result returned by the map function. 
"""
d = reduce(lambda x, y: x+y, map(lambda x: x+x,
           filter(lambda x: (x >= 3), (1, 2, 3, 4))))
print("reduce: ", d)
