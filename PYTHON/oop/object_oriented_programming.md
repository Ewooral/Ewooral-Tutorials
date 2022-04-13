# A Brief Introduction

This lesson welcomes you to the world of object-oriented programming.
We'll cover the following

        Procedural programming
        Object-oriented programming
        Anatomy of objects and classes
        User-defined data types

# Procedural programming#

If you are here, you are probably already familiar with the basics of programming and have used methods in your programs at some point.

Procedural programming is one programming paradigm among many others.

In *procedural programming*, a program is divided into smaller parts called **methods**. These methods are the basic entities used to construct a program. One of the main advantages of procedural programming is code **reusability**. However, the implementation of a complex real-world scenario becomes a difficult and unwieldy task.
Object-oriented programming#

    Object-oriented programming, also referred to as OOP, is a programming paradigm that includes, or relies, on the concept of classes and objects.

### The basic entities in object-oriented programming are **classes** and **objects.**

Programming isn’t much use if you can’t model real-world scenarios using code, right? This is where object-oriented programming comes.

    The basic idea of OOP is to divide a sophisticated program into a number of objects that talk to each other.

### Objects in a program frequently represent real-world objects.

It is also possible for objects to serve application logic and have no direct, real-world parallels. They manage things like authentication, templating, request handling, or any of the other myriad features needed for a practical application.
Anatomy of objects and classes#

Objects may contain data in the form of fields (variables) and methods to operate on that data.

### Think about real-world objects around you. 
What are the characteristics of these objects? Take the example of a **light bulb**. It has a *state*, *which means that it is either on or off.* It also has a *behavior*, which means that when *it is turned on it lights up, and when it is turned off*, it does not produce any light. To conclude this, one can say:

    Objects are a collection of data and their behaviors.

## But where do these objects come from?

    The answer to the above question is classes.

    A class can be thought of as a blueprint for creating objects.

The illustration below shows what a LightBulb class should look like:


From the above illustration, you can see that the state of the object is generally modeled using variables in a class, and the behavior is modeled using methods.

There can be many different objects of the same class. Each can be in an independent state, but all of them will share the same behavior and characteristics.
User-defined data types#

It can be inferred from the discussion above that classes are user-defined data types implemented using primitive data types, e.g., boolean, int, char, etc. While primitive data types only focus on modeling the state of the object, user-defined data types can encapsulate the state and its behaviors into a unit.

In the next lesson, we’ll discuss a variety of object-oriented programming languages including Python.
