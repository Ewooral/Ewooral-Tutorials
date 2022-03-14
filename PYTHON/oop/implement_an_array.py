class My_Array:

    def __init__(self):
        self.length = 0;
        self.data = {};
        self.name = "Elijah Boahen"

    def __repr__(self):
        return "This is an object"

    def __str__(self):
        return self.name

    def get(self, index):
        return self.data[index];

    def push(self, item):
        self.data[self.length]=item;
        self.length += 1; 
        return self.length
    
    


newArray = My_Array();
newArray.push("Me")
newArray.push("Anwa Moo")
newArray.__dict__
print(newArray)
print(newArray.length)
print(newArray.get(0));
