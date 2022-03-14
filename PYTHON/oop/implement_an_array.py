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

    def is_empty(self):
        
        return self.data == {};


    def push(self, item):
        self.data[self.length]=item;
        self.length += 1; 
        return self.length;

    def popMe(self):
        lastItem = self.data[self.length - 1];
        del self.data[self.length - 1];
        self.length -= 1;
        return lastItem;

    def eliminate(self, index):
        deletedItem = self.data[index];
        self.shiftItems(index);
        return deletedItem;

    def shiftItems(self, index):
        for index in range(index, self.length - 1):
            self.data[index] = self.data[index + 1];
        del self.data[self.length - 1];
        self.length -= 1;


    
    


newArray = My_Array();
print(newArray.__dict__);
newArray.push("Elijah Boahen");
newArray.push("23rd March, 2022");
newArray.push("Tema to Bloomberg as a software Engineer");
newArray.popMe();
newArray.eliminate(1);
print(newArray.is_empty())
print(newArray.get(0));
print(newArray.__dict__);

 



