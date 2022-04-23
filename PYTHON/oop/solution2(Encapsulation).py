"""
Challenge 2: Implement the Complete Student Class

In this challenge, you will implement a student class. 
We'll cover the following

        Problem statement
            Task
            Input
            Output
        Coding exercise

Problem statement#

Implement the complete Student class by completing the tasks below
Task#

Implement the following properties as private:

    name
    rollNumber

Include the following methods to get and set the private properties above:

    getName()
    setName()
    getRollNumber()
    setRollNumber()

Implement this class according to the rules of encapsulation.
Input#

Checking all the properties and methods
Output#

Expecting perfectly defined fields and getter/setters

    Note: 
    * Do not use initializers to initialize the properties. 
    * Use the set methods to do so. If the setter 
      is not defined properly, the corresponding 
      getter will also generate an error 
      even if the getter is defined properly.

Coding exercise#

First, take a close look, and then design a step-by-step algorithm before
 trying the implementation. This problem is designed for your practice, 
 so initially try to solve it on your own. If you get stuck, you can always
  refer to the solution provided in the next lesson.

Good luck!

"""


class Student:
    __name = None
    __rollNumber = None
    age = 29
    
    def setName(self, name):
        self.__name = name

    def getName(self):
        return self.__name

    def setRollNumber(self, rollNumber):
        self.__rollNumber = rollNumber

    def getRollNumber(self):
        return self.__rollNumber

    
StudA = Student()

StudA.setName("Martin")
print(StudA.getName())

StudA.setRollNumber(1130113)
print(StudA.getRollNumber())

print(StudA.__class__.age)

# print(StudA.__name)

