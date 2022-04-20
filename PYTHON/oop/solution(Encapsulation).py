"""
Problem statement#

You are given a partially completed code of a Rectangle class in the editor. Implement the class by completing the tasks below.
Task 1#

Implement a constructor to initialize the values of two private properties: length and width.
Task 2#

Implement a method, area(), in the Rectangle class that returns the product of length and width. See the formula below:

Area=length×widthArea = length \times widthArea=length×width

Sample properties

length = 4
width = 5

Sample method output

20

Task 3#

Implement a method, perimeter(), in the Rectangle class that returns two times the sum of length and width. See the formula below:

Perimeter=2×(length+width)Perimeter = 2\times (length + width)Perimeter=2×(length+width)

Sample properties

length = 4
width = 5

Sample method output

18

Coding exercise#

First, take a close, and then design a step-by-step algorithm before trying the implementation. This problem is designed for your practice, so initially try to solve it on your own. If you get stuck, you can always refer to the solution provided in the next lesson.

Good luck!

"""
class Rectangle:
    def __init__(self, length=None, width=None) -> None:
        self.__length = length
        self.__width = width

    def area(self):
        return (self.__length * self.__width)

    def perimeter(self):
        return (2 * (self.__length + self.__width))


newRec = Rectangle(4, 5)
print("Area is", newRec.area())
print("Perimeter is", newRec.perimeter())

# newRec.__length # the __length property is encapsulated and therefore cannot be accessed!



