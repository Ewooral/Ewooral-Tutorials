# What is Design Patterns?
A practical proven solution to a recurring design problem
It allows you to use previously outlined
solutions that expert developers have often used to solve a
software problem, so you do not need to build a solution from
the basics of object-oriented programming principles every
time 

# Categories of Patterns
The Gang of Four’s pattern catalog contains 23 patterns. 
These patterns can be sorted into three different categories:
creational patterns, structural patterns, and behavioral
patterns. Some patterns might have elements that allow them
to span all of the categories – it is not always clear cut which
categories a pattern falls under. These categories were used to
simply organize and characterize the patterns in their book.

# Creational Patterns
Creational patterns tackle how you handle creating or
cloning new objects. Cloning an object occurs when you are
creating an object that is similar to an existing one, and instead
of instantiating a new object, you clone existing objects instead
of instantiating them.
Creational patterns depend on the programming language
being used. Languages without the notion of classes, such as
Javascript, would encourage you to clone an object and expand
it to meet the purposes of those particular instances, called
prototypes. Javascript allows for changes to these prototypes at
runtime. Languages that rely on classes, however, such as Java
and C#, instantiate objects using specific classes defined at
compile time.
The different ways of creating objects will greatly influence how
a problem is solved. Therefore, different languages therefore
impact what patterns are possible to use.


# Structural Patterns
Structural patterns describe how objects are connected to
each other. These patterns relate to the design principles of
decomposition and generalization, as discussed in the first
course in this specialization.
There are many different ways that you can structure objects
depending on the relationship you’d like between them. Not
only do structural patterns describe how different objects have
relationships, but they also describe how subclasses and