class Player:
    teamName = 'Liverpool'  # class variables

    def __init__(self, name):
        self.name = name  # creating instance variables

    @classmethod
    def getTeamName(cls):
        return cls.teamName

    @staticmethod
    def demo():
        print("I am a static method.")
        play = Player("Jumah Sumaila")
        print(play.name)


print(Player.getTeamName())
p1 = Player('lol')
p1.demo()
Player.demo()
print(p1.getTeamName())
