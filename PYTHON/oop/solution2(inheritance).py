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
Sa = SavingsAccount("Moses", 500, 5)

Sa.getBalance()

Sa.depositAmount(400)

Sa.getBalance()

Sa.withdrawal(200)

Sa.getBalance()

Sa.interestAmount()