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

# When we run the start() function, 
  * the **self keyword** points to the *bound instance* of Car - so when we call start() on my_car, self points to my_car and sees an instance variable runs that  is False, but when we call my_other_car.start(), it returns True

## self refers to an instance
    Back to what we were saying in the last section, runs is a class variable on the Car class, meaning that it exists for all instances of type Car. When we set runs to False, we created an instance variable on my_car, and when we called start(), self told the interpreter to look for an instance variable in my_car called runs.
 
    When we called my_other_car.start(), the interpreter looked for an instance variable called runs, but didn’t find it, so it looked at the next level up, the class, and found the class variable Car.runs, which returned True.

    You may have noticed, but all instance methods within classes take self as their first argument, such as def start(self): above.