## **Object-oriented Programming (OOP)** 
    is a language model (or paradigm) in which properties or behaviors are organized into “objects”. Some languages encourage a more procedural style, like if you were writing a recipe - some popular examples are COBOL and BASIC. Languages that adopt an Object-oriented style organize things into objects, and provide methods for objects to communicate with one another.

## **Classes vs Instances**
    The Object-oriented Programming paradigm is structured around Classes and Instances. You can think of a class as a “type” of something, like “Car.” You can think of an instance as a specific thing, such as “my Subaru,” which is a type of “Car.” Both classes and instances can have variables and methods. Changing a class variable will change what is returned when you get that variable from an instance, however changing an instance variable only applies to that one instance. We’ll come back to this in a second.

    ``` python
    # chapter_6.py

class Car:
    runs = True

    def start(self):
        if self.runs:
            print("Car is started. Vroom vroom!")
        else:
            print("Car is broken :(")

my_car = Car()
print(f"My car runs: {my_car.runs}")
my_car.runs = False
my_car.start()

    ```

# When we run the start() function, the **self keyword ** points to the *bound instance* of Car - so when we call start() on my_car, self points to my_car and sees an instance variable runs that is False, but when we call my_other_car.start(), it returns True