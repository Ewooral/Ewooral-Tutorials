"""
Problem statement#

In this challenge, we will be extending the previous challenge and implementing methods in the parent class and its corresponding child class.

    The initializers for both classes have been defined for you.

Task 1#

In the Account class, implement the getBalance() method that returns balance.
Task 2#

In the Account class, implement the deposit(amount) method that adds amount to the balance. It does not return anything.

Sample input

balance = 2000
deposit(500)
getbalance()

Sample output

2500

Task 3#

In the Account class, implement the withdrawal(amount) method that subtracts the amount from the balance.
It does not return anything.

Sample input

balance = 2000
withdrawal(500)
getbalance()

Sample output

1500

Task 4#

In the SavingsAccount class, implement an interestAmount() method that returns the
interest amount of the current balance. Below is the formula for calculating the interest amount: 
                                                        
                                                        Interestamount = interestRate * balance /100

Sample input

balance = 2000
interestRate = 5
interestAmount()

Sample output

100

The following figure shows what the result should logically look like:
Based and Derived Classes Structure
Coding exercise#

Design a step-by-step algorithm before jumping to the implementation. This problem is designed for your practice, so initially try to solve it on your own. If you get stuck, you can always refer to the solution provided in the next lesson.

Good luck!

    Note: A new SavingsClass object is initialized at the end of the code and test results will be based on it.


"""

class Account:
    def __init__(self, title=None, balance=0):
        self.title = title
        self.balance = balance
        print("...................")
    
    # this method just returns the value of balance
    def getBalance(self):
        print(f"Balance: {self.balance} ")

        print("...................")

    # deposit method adds the amount to the balance
    def depositAmount(self, amount):
        self.balance +=  amount
        print(f"{amount} has been deposited")

        print("...................")

    # withdrawal method subtracts the amount from the balance
    def withdrawal(self, amount):
        self.balance -= amount
        print(f"{amount} has been withdrawn" )

        print("...................")


class SavingsAccount(Account):
    def __init__(self, title=None, balance=0, interestRate=0):
        super().__init__(title, balance)
        self.interestRate = interestRate

    def interestAmount(self):
        self.interestamount = (self.interestRate * self.balance) / 100

        print(f"Interest amount: {self.interestamount}")

        print(".....................")




# Acc = Account("Moses", 500)
OpenNewSavingsAccout = SavingsAccount("Moses", 500, 5)

OpenNewSavingsAccout.getBalance()

OpenNewSavingsAccout.depositAmount(400)

OpenNewSavingsAccout.getBalance()

OpenNewSavingsAccout.withdrawal(200)

OpenNewSavingsAccout.getBalance()

OpenNewSavingsAccout.interestAmount()