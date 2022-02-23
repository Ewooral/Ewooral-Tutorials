
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

# THIS 
def sum(a, b):
    return a + b
print(sum(4, 4))

# OR
(lambda a, b: print(a + b))(2, 3)

print((lambda x: x + x)(2))

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
print("These are ",name)
