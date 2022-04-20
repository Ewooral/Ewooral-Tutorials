# What is Information Hiding?

Get familiar with a very important aspect of Object-Oriented Programming called data hiding.
We'll cover the following

        Introduction
        A real life example
        Components of data hiding

Introduction#

In the previous chapter, you got familiar with the concept of objects and classes.

In OOP, objects and classes are the fundamental entities. Objects are created using classes. One can observe that classes contain properties and that objects are created to manipulate and access these properties. To make this object-oriented system more reliable and error free, it is a good practice to limit access to the class members at times.

**Information hiding** refers to the concept of hiding the inner workings of a class and simply providing an interface through which the outside world can interact with the class without knowing what’s going on inside.

 **The purpose** is to implement classes in such a way that the instances (objects) of these classes should not be able to cause any unauthorized access or change in the original contents of a class. One class does not need to know anything about the underlying algorithms of another class. However, the two can still communicate.

## A real life example#

Let’s apply this to a real-world scenario. Take the **doctor-patient model**. In the case of an illness, the patient consults the doctor, after which he or she is prescribed an appropriate medicine.

The patient only knows the process of going to the doctor. The logic and reasoning behind the doctor’s prescription are unknown to the patient. A patient will not understand the medical details the doctor uses to reach his/her decision on the treatment.


### Components of data hiding#

Data hiding can be divided into two primary components:

    1.Encapsulation
    2. Abstraction

We will discuss the abstraction in a later chapter. In this section, we will cover the Encapsulation part in detail.

This was pretty much all about information hiding and the related techniques. In the next lesson, you will learn about Encapsulation.

### Encapsulation
 in OOP refers to binding data and the methods to manipulate that data together in a single unit, that is, class. Encapsulation is usually done to hide the state and representation of an object from outside. A class can be thought of as a capsule having methods and properties inside it.

 ### When encapsulating classes, 
 **a good convention is to declare all variables of a class private**. This will restrict direct access by the code outside that class.

At this point, a question can be raised: **If the methods and variables are encapsulated in a class, then how can they be used outside of that class?**

The answer to this is simple. **One has to implement public methods to let the outside world communicate with this class. These methods are called getters and setters.** We can also implement other custom methods.
