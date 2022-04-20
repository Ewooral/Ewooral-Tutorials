class Vehicle: # Parent Class
    def __init__(self, make, color, model):
        self.make = make
        self.color = color
        self.model = model

    def printDetails(self):
        print("Manufacturer:", self.make)
        print("Color:", self.color)
        print("Model:", self.model)

# child class Car inheriting the parent class fields
class Car(Vehicle):
    def __init__(self, make, color, model, doors):
        # calling the constructor from parent class
        Vehicle.__init__(self, make, color, model)
        self.doors = doors

    def printCarDetails(self):
        self.printDetails()
        print("Doors:", self.doors)


obj1 = Car("Suzuki", "Grey", "2015", 4)
obj1.printCarDetails()


print(".................................")
### Example 2
class Food:
    def __init__(self, jollof, kenkey):
        self.kenkey = kenkey
        self.jollof = jollof

    def eat(self):
        return f"I will eat {self.kenkey}"

class Soup(Food):
    def __init__(self, jollof, kenkey, okro_soup):
        # calling the constructor from parent class
        Food.__init__(self, jollof, kenkey)
        self.soup = okro_soup


    def dinner(self):
         print(self.eat(), "and", self.soup)

supper = Soup("Jollof rice", "Kenkey with Fish", "okro soup")
supper.dinner()


# print(".................................")
# # using super() function
# class Vehicle:  # defining the parent class
#     fuelCap = 90


# class Car(Vehicle):  # defining the child class
#     fuelCap = 50

#     def display(self):
#         # accessing fuelCap from the Vehicle class using super()
#         print("Fuel cap from the Vehicle Class:", super().fuelCap)

#         # accessing fuelCap from the Car class using self
#         print("Fuel cap from the Car Class:", self.fuelCap)
# newCar = Car()
# newCar.display()


# print(".................................")
# # calling parent class methods from child class

# class Vehicle:  # defining the parent class
#     def display(self):  # defining display method in the parent class
#         print("I am from the Vehicle Class")


# class Car(Vehicle):  # defining the child class
#     # defining display method in the child class
#     def display(self):
#         super().display()
#         print("I am from the Car Class")


# newCar = Car()
# newCar.display()

# print(".................................")

# ### Using super() with initializers#


# class Vehicle:
#     def __init__(self, make, color, model):
#         self.make = make
#         self.color = color
#         self.model = model

#     def printDetails(self):
#         print("Manufacturer:", self.make)
#         print("Color:", self.color)
#         print("Model:", self.model)


# class Car(Vehicle):
#     def __init__(self, make, color, model, doors):
#         super().__init__(make, color, model)
#         self.doors = doors

#     def printCarDetails(self):
#         self.printDetails()
#         print("Door:", self.doors)


# obj1 = Car("Suzuki", "Grey", "2015", 4)
# obj1.printCarDetails()


# print(".................................")



# '''Note: It is not necessary that the call to super()
#   in a method or an initializer is made in the first line of the method.
# '''


# class Vehicle:
#     def __init__(self, make, color, model):
#         self.make = make
#         self.color = color
#         self.model = model

#     def printDetails(self):
#         print("Manufacturer:", self.make)
#         print("Color:", self.color)
#         print("Model:", self.model)


# class Car(Vehicle):
#     def __init__(self, make, color, model, doors):
#         self.doors = doors
#         super().__init__(make, color, model)

#     def printCarDetails(self):
#         self.printDetails()
#         print("Door:", self.doors)


# obj1 = Car("Suzuki", "Grey", "2015", 4)
# obj1.printCarDetails()
