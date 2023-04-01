# What is Design Patterns?
A practical proven solution to a recurring design problem

        - It allows you to use previously outlined
        solutions that expert developers have often used to solve a
        software problem, so you do not need to build a solution from
        the basics of object-oriented programming principles every
        time 

        - Design patterns may also be used to help fix `tangled`, `structureless` 
        software code, also known as `spaghetti code.`


        - In other words, design patterns help software developers so that 
        they have a guide to help them solve design problems the way an expert might, so
        not everything needs to be built from scratch.

        - A strong advantage of design patterns is that they have already
        been proven by experts. This means that you do not need to go
        through the trials they have, and you go straight to creating
        better-written software.

        - Another advantage of design patterns is that they help create a
        design vocabulary. This means that design patterns provide a
        simplified means of discussing design solutions, so they do not
        need to be explained over and over. 


## Pattern Languages
A pattern language is a collection of patterns that are
related to a certain problem space. 

    For example, the pattern
    language you select for designing accounting software would
    be different from those you select for designing gaming
    software. A pattern language for accounting software would
    include double-entry bookkeeping, while a pattern language for
    gaming software would include design words such as
    encounters, quests, and players.
        

# Categories of Patterns

        - Creational patterns
        - Behavioral patterns
        - Structural patterns

### Creational Patterns
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


### Structural Patterns
Structural patterns describe how objects are connected to
each other. These patterns relate to the design principles of
decomposition and generalization, as discussed in the first
course in this specialization.
There are many different ways that you can structure objects
depending on the relationship you’d like between them. Not
only do structural patterns describe how different objects have
relationships, but they also describe how subclasses and
classes interact through inheritance. Structural patterns use
these relationships and describe how they should work to
achieve a particular design goal. Each structural pattern
determines the various suitable relationships among the
objects.
A good metaphor for considering structural patterns is that of
pairing different kinds of foods together: flavor determines
what ingredients can be mixed together to form a suitable
relationship. Some relationships combine ingredients together,
such as chickpeas and garlic in hummus. Some relationships
still combine ingredients, but those ingredients may maintain
some independence, like a salad of mixed vegetables. Some
relationships allow a pairing of ingredients, without a physical
combination, like wine and cheese.

### Behavioral Patterns
Behavioral patterns focus on how objects distribute work
and describe how each object does a single cohesive function.
Behavioral patterns also focus on how independent objects
work towards a common goal.
A good metaphor for considering behavioral patterns is that of
a racing car pit crew at a track. Every member of the crew has a
role, but together they work as a team to achieve a common
goal. Similarly, a behavioral pattern lays out the overall goal
and purpose for each object.

