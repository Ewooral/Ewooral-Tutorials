# Types of Inheritance

Learn about the various types of inheritance in Python.
We'll cover the following

        Single inheritance
        Multi-level inheritance
        Hierarchical inheritance
        Multiple inheritance
        Hybrid inheritance

Based upon parent classes and child classes, there exists the following five types of inheritance:

    Single
    Multi-level
    Hierarchical
    Multiple
    Hybrid

## Single inheritance#

In single inheritance, there is only a single class extending from another class. We can take the example of the **Vehicle class** as the parent class, and the **Car class** as the child class. 

    E.g. Vehicle Class <--- Car class


## Multi-level inheritance#

When a class is derived from a class which itself is derived from another class, it is called multilevel inheritance. We can extend the classes to as many levels as we want to.
 
    E.g. Vehicle Class <--- Car class <--- Hybrid class

Let’s implement the three classes illustrated above:

    A Car IS A Vehicle
    A Hybrid IS A Car

## Hierarchical inheritance#

In hierarchical inheritance, more than one class extends, as per the requirement of the design, from the same base class. The common attributes of these child classes are implemented inside the base class.

Example:

    A Car IS A Vehicle
    A Truck IS A Vehicle

Below is a code example of hierarchical inheritance.


## Multiple inheritance#

When a class is derived from more than one base class, i.e., when a class has more than one immediate parent class, it is called multiple inheritance.

Example:

    HybridEngine IS A ElectricEngine.
    HybridEngine IS A CombustionEngine as well.

Below is a code example of multiple inheritance.


## Hybrid inheritance#

A type of inheritance which is a combination of Multiple and Multi-level inheritance is called hybrid inheritance.

    CombustionEngine IS A Engine.
    ElectricEngine IS A Engine.
    HybridEngine IS A ElectricEngine and a CombustionEngine.

Below is the code implementation of an example of hybrid inheritance.
