class My_Array:

    def __init__(self):
        self.length = 0;
        self.data = {};
        

    # def __repr__(self):
    #     return self.data

        # OR

    # def __str__(self):
    #     return self.name

    def get(self, index):
        return self.data[index];

    def push(self, item):
        self.data[self.length]=item;
        self.length += 1; 
        return self.length;

    def popMe(self):
        lastItem = self.data[self.length - 1];
        del self.data[self.length - 1];
        self.length -= 1;
        return lastItem;
    
    


newArray = My_Array();
newArray.push("Me");
newArray.push("Anwa Moo");
newArray.push("Monday");
newArray.push("new");
newArray.popMe()
print(newArray.get(0));
print(newArray.__dict__);


