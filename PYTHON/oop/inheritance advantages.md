# Advantages of Inheritance

Get to know about the advantages of using Inheritance.
We'll cover the following

        Reusability
        Code modification
        Extensibility
        Data hiding

## Reusability#

Inheritance makes the code reusable. Consider that you are up for designing a banking system using classes. Your model might have these:

    A parent class: BankAccount | getBalance(), getDetails(), withdraw(), deposit()
    A child class: SavingsAccount
    Another child class: CheckingAccount

In the above example, you don’t need to duplicate the code for the *deposit()* and *withdraw()* methods inside the child classes, namely SavingsAccount and CheckingAccount. In this way, you can avoid the duplication of code by extending the base class


## Code modification#

Suppose you put the same code in different classes, but what happens when you have to make changes to a function and in several places? There is a high likelihood that you will forget some places and bugs will be introduced. You can avoid this with inheritance, which will ensure that all changes are **localized**, and inconsistencies are avoided.

## Extensibility#

Using inheritance, one can extend the base class as per the requirements of the derived class. It provides an easy way to upgrade or enhance specific parts of a product without changing the core attributes. An existing class can act as a base class from which a new class with upgraded features can be derived.

In the example above, you realize at a later point that you have to diversify this banking application by adding another class for MoneyMarketAccount. So, rather than implementing this class from scratch, you can extend it from the existing BankAccount class as a starting point. You can also reuse its attributes that are common with MoneyMarketAccount.
Child class can add on to the Parent class

## Data hiding#

The base class can keep some data private so that the derived class cannot alter it. This concept is called encapsulation, and it has already been discussed in the previous chapter.
