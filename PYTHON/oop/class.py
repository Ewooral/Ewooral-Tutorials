class Car:
    runs = True

    def start(self):
        if self.runs:
            print("Car is started. Vroom vroom!")
        else:
            print("Car is broken :(") 


my_car = Car();
print(f"My car runs: {my_car.runs}")
my_car.runs = False


class PrefixPostfixTest:
    def __init__(self):
        self.__bam__ = 42
        self.go = "Home"


print(PrefixPostfixTest().__bam__)
print(PrefixPostfixTest().go)
