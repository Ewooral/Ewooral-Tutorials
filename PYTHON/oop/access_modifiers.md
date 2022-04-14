# Access Modifiers

    Learn about the private, public, and protected data members in Python. 
## We'll cover the following

        Public attributes
        Private attributes
            Private properties
                Code explanation
            Private methods
                Code explanation
            Accessing private attributes in the main code
            Not so protected

In Python, we can impose access restrictions on different data members and member functions. The restrictions are specified through **access modifiers.** Access modifiers are tags we can associate with each member to define which parts of the program can access it directly.

There are two types of access modifiers in Python. Let’s take a look at them one by one.

### Public attributes#

    Public attributes are those that can be accessed inside the class and outside the class.

Technically in Python, all methods and properties in a class are publicly available by default. If we want to suggest that a method should not be used publicly, we have to declare it as private explicitly.

Below is an example to implement public attributes:
```py
class Employee:
    def __init__(self, ID, salary):
        # all properties are public
        self.ID = ID
        self.salary = salary

    def displayID(self):
        print("ID:", self.ID)


Steve = Employee(3789, 2500)
Steve.displayID()
print(Steve.salary)

```

In the code above, the properties ID and salary and the method displayID() are public as they can be accessed in the class as well as outside the class.

### Private attributes#

    Private attributes cannot be accessed directly from outside the class but can be accessed from inside the class.

The aim is to keep it hidden from the users and other classes. Unlike in many different languages, it is not a widespread practice in Python to keep the data members private since we do not want to create hindrances for the users. We can make members private using the double underscore **__ prefix**

Trying to access private attributes in the main code will generate an error. An example of this is shown below:
Private properties#

Let’s see an example of code for implementing private properties:

    private_properties

```py 
class Employee:
    def __init__(self, ID, salary):
        self.ID = ID
        self.__salary = salary  # salary is a private property


Steve = Employee(3789, 2500)
print("ID:", Steve.ID)
print("Salary:", Steve.__salary)  # this will cause an error

```
Code explanation#

    In the code above, ID is a public property, but __salary is a private property, so it cannot be accessed outside the class.

    When it is tried to be accessed outside the class, the following error is generated:

    'Employee' object has no attribute '__salary'

    To ensure that no one from the outside knows about this private property, the error does not reveal its identity.

Class with private attributes
Private methods#

Let’s see a code example for implementing private methods:

    private_methods

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
Code explanation#

    ID is a public property, so it can be accessed from outside and inside the class.

    __salary is a private property, so it cannot be accessed from outside the class but can be accessed from inside the class.

    The displaySalary() method is a public method, so it can be accessed from outside the class. This method can access the private property, __salary, as well.

    The __displayID() method is a private method, so it cannot be accessed from outside the class.

    When you try to access displayID() from outside the class, the following error is generated:

    'Employee' object has no attribute '__displayID()'

    To ensure that no one from the outside knows about this private property, the error does not reveal its identity.

Class with private methods

    Note: Methods are usually public since they provide an interface for the class properties and the main code to interact with each other.

Accessing private attributes in the main code#

As discussed above, it is not common to have private variables in Python.

Properties and methods with the __ prefix are usually present to make sure that the user does not carelessly access them. Python allows for free hand to the user to avoid any future complications in the code. If the user believes it is absolutely necessary to access a private property or a method, they can access it using the _<ClassName> prefix for the property or method. An example of this is shown below:
1
2
3
4
5
6
7
8
9
Not so protected#

Protected properties and methods in other languages can be accessed by classes and their subclasses, which will be discussed later in the course. As we have seen, Python does not have a strict rule for accessing properties and methods, so it does not have the protected access modifier.
