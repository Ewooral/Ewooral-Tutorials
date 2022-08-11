# Introduction to Objects and Classes

We'll cover the following

        A brief encounter
        Objects and classes
            Properties
            Methods
        Benefits of objects and classes

## A brief encounter#

We see objects everywhere in our surroundings. These objects have certain properties that define them. There are certain behaviors that these objects perform on their own, and there are actions that can be performed on them.

Let’s take the example of a company employee. An employee has the following properties or attributes:

    ID
    Salary
    Department

The following actions or behaviors can be performed on an employee:

    Calculation of tax on salary
    Calculation of salary per day

In a company, each worker has a different name, salary, and department, but the type of each worker is employee. So, 
there is a generic blueprint for each worker working in the company, but each of them has different attributes.

A class has a singular blueprint, and objects are part of a class and are differentiated by their distinct properties.
Objects and classes#

Suppose, there are two employees at Educative, *Mark* and *Chris*. The properties of Mark and Chris are given in the image below:

### Properties#

**Properties** are variables that contain information regarding the object of a class. An employee object will have an ID, a salary, 
and the department as its properties. New properties can be added to become a part of an object of the employee class.

    Attributes are also referred to as properties or members. For consistency, we will be using properties throughout the course.

### Methods#

**Methods** are like functions that have access to properties (and other methods) of a class.*Methods can accept parameters and return 
values. They are used to perform an action on an object of a class*. In the example above, we have tax() and salaryPerDay() as class methods.

    Behaviors are also referred to as member functions or methods. For consistency, we will be using methods throughout the course.

### Benefits of objects and classes#

Objects and classes allow us to create complex applications in Python. This is why they are considered the building blocks of OOP principles.

    Objects and classes are also instrumental for compartmentalizing code. Different components can become separate classes 
    that would interact through interfaces. These ready-made components will also be available for use in future applications.

    The use of classes makes it easier to maintain different parts of an application since it is easier to make changes in classes
    (more on this later).

In the next lesson, we will discuss how to declare a class in Python.
