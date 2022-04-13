# Declaring a Class in Python

Learn how to declare classes in Python.
We'll cover the following

        Declaration
            Naming rules
        Creating a class object

## Declaration#


In Python, classes are defined as follows:

``` python
        class ClassName:
            pass
```


### Python class

The class keyword tells the compiler that we are creating a custom class, which is followed by the class name and the : sign.

All the properties and methods of the class will be defined within the class scope.
Naming rules#

The following rules must be adhered to when naming classes:

    Must start with a letter or underscore
    Should only be comprised of numbers, letters, or underscores

## Creating a class object#

The name of the class, MyClass, will be used to instantiate an object of the class in our main program. We can create an object of a class by simply using the name of the class followed by a pair of parenthesis. It looks similar to calling a function, but Python can distinguish between the two and creates a new object of the corresponding class. An example of this is given below:
```python
    class MyClass:
        pass


    obj = MyClass()  # creating a MyClass Object
    print(obj)
```

### Creating object

Well done! You’ve created your first object-oriented program in Python. Printing this object, obj, will show the memory address at which this object is stored.

This is just a basic implementation of a Python class and doesn’t serve any particular purpose as it does not contain any properties or methods.

In the next few lessons, we’ll learn the implementation of Python classes in detail.
