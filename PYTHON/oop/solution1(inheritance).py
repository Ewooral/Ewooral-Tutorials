class Account:
    def __init__(self, title=None, balance=0):
        self.title = title
        self.balance = balance 

    def tit(self):
        print(f"{self.title} \n {self.balance}")


class SavingsAccount(Account):
    def __init__(self, title=None , balance=0, interestRate=0 ):
        super().__init__(title, balance)
        self.interestRate = interestRate

    def intR(self):
        print(f"Interest Rate: {self.interestRate}")

    def Tit(self):
        return self.tit()
        

Acc = Account("Mark", "GH 5.00")
Acc.tit()
print("....................")
Sa = SavingsAccount("Kwesi", "GH 40,000", "5%")
Sa.intR()
Sa.Tit()