""" 
In slicing, the first element of a sequence has index "0". 
The second element of a sequence has index "1".
The ith element of a sequence has index i - 1.

The indices of any sequence "elem" starts at position "0"
and end at position "len(elem) - 1"

Index     0 1 2 3 4 5 6 7
Character u n i v e r s e

first element = 2 
second element = 1  

In slicing, "word[i:j]" returns
the substring starting from index "i" (included) and ending
in index "j" (excluded)


"""
Character = "universe"

for i in Character:
    print(i, "=", Character.index(i))

print("...................")

print(Character[2:3])
print(Character[2:4])


# THE STEP SIZE IN SLICING 
# slicing notation is denoted by [start: end : step]

print(Character[0:5:2]) # uie
