# What is Polymorphism?

The concept of Polymorphism will be explained which is an important concept in OOP.
We'll cover the following

        Definition
        A brief introduction
            Make things simpler with polymorphism
            What does polymorphism achieve?

## Definition#

    The word Polymorphism is a combination of two Greek words, Poly meaning many and Morph meaning forms.
    In programming, POLYMORPHISM refers to the same object exhibiting different forms and behaviors.

For example, take the **Shape Class**. The exact shape you choose can be anything. *It can be a rectangle, a circle, a polygon, or a diamond*. While, these are all shapes, their properties are different. This is called polymorphism.

## A brief introduction#

Assume there is a parent class named Shape from which the child classes Rectangle, Circle, Polygon, and Diamond are derived.

Suppose your application will need methods to calculate the area of each specific shape. The area for each shape is calculated differently, which is why you can’t have a single implementation. You could throw in separate methods in each class (for instance, getSquareArea(), getCircleArea() etc.). But this makes it harder to remember each method’s name.

## Make things simpler with polymorphism#

It would be better if all specific area calculation methods could be called getArea(). You would only have to remember one method name and when you call that method, the method specific to that object would be called. This can be achieved in object-oriented programming using polymorphism. The base class declares a function without providing an implementation. Each derived class inherits the function declaration and can provide its own implementation

Consider that the Shape class has a method called getArea(), which is inherited by all subclasses mentioned. With polymorphism, each subclass may have its own way of implementing the method. 
    
    For example, when the getArea() method is called on an object of the Rectangle class, the method will respond by displaying the area of the rectangle. On the other hand, when the same method is called on an object of the Circle class, the circle’s area will be calculated and displayed on the screen.

## What does polymorphism achieve?#

    In effect, polymorphism cuts down the work of the developer. When the time comes to create more specific subclasses with certain unique attributes and behaviors, the developer can alter the code in the specific areas where the responses differ. All other pieces of the code can be left untouched.

In the next lesson, we will learn how to implement polymorphism in OOP.







# ..............................................................Implementing Polymorphism Using Methods...............................................................



# Implement polymorphism using methods.
We'll cover the following

         Example
            Explanation

We have learned how polymorphism is useful in making code manageable. 

    - In this lesson, we will learn how to implement polymorphism using methods. 
    - In the next lesson, we will implement it using inheritance.

## Example#

Consider two shapes that are defined as classes: Rectangle and Circle. These classes contain the getArea() method that calculates the area for the respective shape depending on the values of their properties.
```PY
class Rectangle():

    # initializer
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height
        self.sides = 4

    # method to calculate Area
    def getArea(self):
        return (self.width * self.height)


class Circle():
    # initializer
    def __init__(self, radius=0):
        self.radius = radius
        self.sides = 0

    # method to calculate Area
    def getArea(self):
        return (self.radius * self.radius * 3.142)


shapes = [Rectangle(6, 10), Circle(7)]
print("Sides of a rectangle are", str(shapes[0].sides))
print("Area of rectangle is:", str(shapes[0].getArea()))

print("Sides of a circle are", str(shapes[1].sides))
print("Area of circle is:", str(shapes[1].getArea()))

```
Explanation#

    In the main function, at line 87, we have declared a list that has two objects in it.

    The first object is a Rectangle with width 6 and height 10, and the second object is a Circle of radius 7.

    On lines 72 and 83, both classes have the method getArea() but the execution of this method is different for each class.

    Method calls on lines 72 and 83 look identical, but different methods are called. Thus, we have achieved polymorphism.

This was one way of achieving polymorphism. In the next lesson, we will implement polymorphism using a more efficient and commonly used approach: polymorphism using inheritance.











# ..............................................................Implementing Polymorphism Using Inheritance..............................................................



# Implement polymorphism using the OOP concepts.
    We'll cover the following

        Example
        Implementation
            Shape class
            Rectangle class
            Circle class
        Complete program
            Explanation

So far, we have learned that we can add new data and methods to a class through inheritance. But what if we want our derived class to inherit a method from the base class and have a different implementation for it? That is when polymorphism, a fundamental concept in the OOP paradigm, comes into play.
Example#

Consider the example of a Shape class, which is the base class while many shapes like Rectangle and Circle extending from the base class are derived classes. These derived classes inherit the getArea() method and provide a shape-specific implementation, which calculates its area.

     Rectangle and circle inherit from shape

## Implementation#

We will be implementing the parent class first, and then the child classes.

## Shape class#

    The Shape class has only one public method called getArea().

Let’s look at the implementation of the Shape class:
```py
class Shape:
    def __init__(self):
        self.sides = 0

    def getArea(self):
        pass

```
## Rectangle class#

Let’s look at the implementation of the Rectangle class:
```py
# Rectangle IS A Shape with a specific width and height
class Rectangle(Shape):  # derived form Shape class
    # initializer
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.sides = 4

    # method to calculate Area
    def getArea(self):
        return (self.width * self.height)

```

    The Rectangle class is extended from the Shape class. It inherits the sides property from the Shape 
    class and defines new properties, width and height. The method getArea() returns the area of the rectangle.

## Circle class#

Let’s look at the implementation of the Circle class:
```py
# Circle IS A Shape with a specific radius
class Circle(Shape):  # derived form Shape class
    # initializer
    def __init__(self, radius):
        self.radius = radius
        self.sides = 0

    # method to calculate Area
    def getArea(self):
        return (self.radius * self.radius * 3.142)

```
    The Circle class is extended from the Shape class. It inherits the sides property from the Shapes class and defines only one new property, radius. The method getArea() returns the area of the circle.


# Complete program#

See what happens, by merging all the classes and calling the getArea() method:
```py
class Shape:
    def __init__(self):  # initializing sides of all shapes to 0
        self.sides = 0

    def getArea(self):
        pass


class Rectangle(Shape):  # derived from Shape class
    # initializer
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height
        self.sides = 4

    # method to calculate Area
    def getArea(self):
        return (self.width * self.height)


class Circle(Shape):  # derived from Shape class
    # initializer
    def __init__(self, radius=0):
        self.radius = radius

    # method to calculate Area
    def getArea(self):
        return (self.radius * self.radius * 3.142)


shapes = [Rectangle(6, 10), Circle(7)]
print("Area of rectangle is:", str(shapes[0].getArea()))
print("Area of circle is:", str(shapes[1].getArea()))

```
# Explanation#

In the main function, we have declared a list that has two objects in it. The first object is a Rectangle with width 6 and height 10. The second object is a Circle of radius 7.

The getArea() method returns the area of the respective shape. This is Polymorphism: having specialized implementations of the same methods for each class.

In the next lesson, we’ll be learning about the process of method overriding.













# ..............................................................METHOD OVERRIDING..............................................................

# Method Overriding

Learn about what method overriding is and how to achieve it in Python.
We'll cover the following

        A brief introduction
        Advantages and key features of method overriding

## A brief introduction#

    Method overriding is the process of redefining a parent class’s method in a subclass.

In other words, if a subclass provides a specific implementation of a method that had already been defined in one of its parent classes, it is known as **method overriding**.

In the previous example, the Rectangle and Circle classes were overriding the getArea() method from the Shape class.

In this case:

    The method in the parent class is called the overridden method.
    The methods in the child classes are called the overriding methods.

We have already seen the implementation of the getArea() method in the previous lesson, which depicts the concept of overriding. The highlighted portions show where method overriding is happening.


## Advantages and key features of method overriding#

    1. The derived classes can give their own specific implementations to inherited methods without modifying the parent class methods.

    2. For any method, a child class can use the implementation in the parent class or make its own implementation.

    3. Method overriding needs inheritance, and there should be at least one derived class to implement it.

    The methods in the derived classes usually have a dissimilar implementation.

