
"""

A Lambda Function in Python programming
is an anonymous function or a function having no name

In Python, lambda expressions (or lambda forms) are
utilized to construct anonymous functions. To do so, 
you will use the lambda keyword 
(just as you use def to define normal functions)

SYNTAX:
lambda p1, p2: expression

"""

# THIS 
def sum(a, b):
    return a + b
print(sum(4, 4))

# OR

(lambda a, b: print(a + b))(2, 3)


string = 'some kind of a useless lambda'
(lambda y: print(y))(string)

(lambda x: print(x))(string)

# print(list(map(lambda x: x[:2], ['red', 'green', 'blue'])))
# print(list(map(lambda x: x[::-1], ['red', 'green', 'blue'])))
# print(list(map(lambda x: x[::], ['red', 'green', 'blue'])))
