# Definitions#

In Python, properties can be defined into two parts:

    Class variables
    Instance variables


## Class variables#

    The class variables are shared by all instances or objects of the classes.
    A change in the class variable will change the value of that property 
    in all the objects of the class.

## Instance variables#

    The instance variables are unique to each instance or object of the class. 
    A change in the instance variable will change the value of the property 
    in that specific object only.

## static variables

    In Python, a static variable is a variable that is shared among all instances of a class, rather than being unique to each instance. It is also sometimes referred to as a class variable, because it belongs to the class itself rather than any particular instance of the class.

### Defining class variables and instance variables#

    Class variables are defined outside the initializer and instance variables 
    are defined inside the initializer.
```py
class Player:
    teamName = 'Liverpool'  # class variables

    def __init__(self, name):
        self.name = name  # creating instance variables


p1 = Player('Mark')
p2 = Player('Steve')

print("Name:", p1.name)
print("Team Name:", p1.teamName)
print("Name:", p2.name)
print("Team Name:", p2.teamName)

```

## Wrong use of class variables#

It is imperative to use class variables properly since they are shared by all 
the class objects and can be modified using any one of them. Below is an example of 
wrongful use of class variables:
```py
class Player:
    formerTeams = []  # class variables
    teamName = 'Liverpool'
    def __init__(self, name):
        self.name = name  # creating instance variables


p1 = Player('Mark')
p2 = Player('Steve')

p1 = Player('Mark')
p1.formerTeams.append('Barcelona') # wrong use of class variable
p2 = Player('Steve')
p2.formerTeams.append('Chelsea') # wrong use of class variable

print("Name:", p1.name)
print("Team Name:", p1.teamName)
print(p1.formerTeams)
print("Name:", p2.name)
print("Team Name:", p2.teamName)
print(p2.formerTeams)
```

In the example above, while the instance variable name is unique for each and 
every object of the Player class, the class variable, **formerTeams**, can be 
accessed by any object of the class and is updated throughout. We are storing 
all players currently playing for the same team, but each player in the team may 
have played for different former teams. To avoid this issue, the correct 
implementation of the example above will be the following:

```py
class Player:
    teamName = 'Liverpool'  # class variables

    def __init__(self, name):
        self.name = name  # creating instance variables
        self.formerTeams = []


p1 = Player('Mark')
p1.formerTeams.append('Barcelona')
p2 = Player('Steve')
p2.formerTeams.append('Chelsea')

print("Name:", p1.name)
print("Team Name:", p1.teamName)
print(p1.formerTeams)
print("Name:", p2.name)
print("Team Name:", p2.teamName)
print(p2.formerTeams)
```

Now the property formerTeams is unique for each Player class object and 
can only be accessed by that unique object.
Using class variables smartly#

Class variables are useful when implementing properties that should be 
common and accessible to all class objects. Let’s see an example of this:
```py
class Player:
    teamName = 'Liverpool'      # class variables
    teamMembers = []

    def __init__(self, name):
        self.name = name        # creating instance variables
        self.formerTeams = []
        self.teamMembers.append(self.name)


p1 = Player('Mark')
p2 = Player('Steve')

print("Name:", p1.name)
print("Team Members:")
print(p1.teamMembers)
print("")
print("Name:", p2.name)
print("Team Members:")
print(p2.teamMembers)

```
Explanation#

    In the example above, we have defined a class variable teamMembers, which is a list that will 
    be shared by all the objects of the class Player.

    This list, teamMembers, will contain names of all the instances created of the Player class.

    As you can see in line 8, whenever a new object is created, its name is appended in teamMembers.

    In lines 16 and 20, we can see that teamMembers is accessed by p1 and p2 respectively, and both produce the same output.

