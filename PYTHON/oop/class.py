class Employee:
    ID = str(input("key in your ID: \n"))
    Age = str(input("Key in your Age: \n"))
    Salary = None
    Department = None
    
    def __init__(self) -> None:
        _id = str(input("key in your ID: \n"))
        age = str(input("Key in your Age: \n"))

    @classmethod
    def get_name(cls):
        print("my AGE is: ", cls.Age)
        print("my ID is: ", cls.ID)

    def getName(self):
        print("my age is: \n", self.age)

    


Elijah = Employee();
Michael = Employee();
Elijah.get_name()
Michael.getName()
