class Employee:
    ID = None
    Age = None
    Salary = "$40,000"
    Department = "Computer Science"

    try:
         
        def __init__(self):
            self.salary = Employee.Salary
            self.dep = Employee.Department
            return self.salary

            
    except (TypeError, AttributeError, ValueError) as err:
        print(f"Ooops!... {err}")





    


James = Employee()
print(James.dep)

