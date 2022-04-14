class Employee:
    ID = str(input("key in your ID: \n"))
    Age = str(input("Key in your Age: \n"))
    Salary = "$40,000"
    Department = "Computer Science"

    try:
        def department(self) -> None: return self.Department 
         
        def __init__(self) -> None:
            _id = str(input("key in your ID: \n"))
            age = str(input("Key in your Age: \n"))

        @staticmethod
        def name(): return Employee.Salary + str(2)

        @classmethod
        def get_name(cls):
            cls.Salary = Employee.name()
            print("my AGE is: ", cls.Age)
            print("my ID is: ", cls.ID)
            print("My Salary is per month is: ", cls.Salary)

            

    except (AttributeError, TypeError, ValueError) as err:
        print(f"Ooops!... {err}")


class Player:
    teamName = 'Liverpool'  # class variables

    def __init__(self, name):
        self.name = name  # creating instance variables

    @staticmethod
    def demo():
        print("I am a static method.")


p1 = Player('lol')
p1.demo()
# Player.demo()

    


Employee.get_name()
# Employee.department()
# newEmp = Employee()
# newEmp.department()


