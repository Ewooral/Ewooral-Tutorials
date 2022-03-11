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


print(Character[:5:2]) # uie
print(Character[2::2]) # ies


# OVERSHOOTING INDICES IN SLICING

"""
Slicing is robust even if the end index shoots over the
maximal sequence index. Just remember that nothing
unexpected happens if slicing overshoots sequence indices. 
Eg is found below

""" 
print("Overshooting value: ", Character[8:50]) # nothing
print("Overshooting value: ", Character[4:50]) # erse


# Examples 
s = 'sunshine'
print(s[1:5:2] + s[1:5:1])

# DEFAULT VALUES IN SLICING
""" [start = 0, stop = len(s), step = 1] """

s[::2]  # start = 0, end = len(s), step = 2 => snhn
print(s[::2])
print(s[0:len(s):1]) # sunshine
print(s[::]) # sunshine


word = "galaxy"
print(word[:-2])
print(word[:-2] + word[4:])
print(word[:])


# NEGETIVE STEP SIZE
 
"""
A negative step size indicates that we are not slicing from left to right,
but from right to left.
E.g. s[5:1:-1] prints out

"""

# DEFAULT INDICES WHEN USING A NEGETIVE STEP SIZE
 
"""
start = len(s) - 1,
end = -len(s) - 1 , and
step = 1
"""

s = 'sunshine'
print(s[5:1:-1]) # ihsn

word = "O brother where art thou?"
print(word[9:1:-1][::-1]) # brother
# firstly, word[9:1:-1] gives the reverse of "brother" which is "rehtorb".
# lastly, word[9:1:-1][::-1] gives the rever se of "rehtorb" which is "brother"

s = 'sunshine'
#    01234567

print(s[len(s) - 1::]) # e 
print("result: ", s[len(s) - 1 : -len(s) - 1 : -1]) # this is the same as s[::-1]
print("result: ", s[7 : -9 : -1])

# Example 1
l = [1, 2, 3, 4]
print(l[2:])
print(l[::-2])

# Example 2
customer_name = 'Hubert'
k = 3  # maximal size of database entry
x = 1  # offset
db_name = customer_name[x:x+k]
print(db_name) # ube

# Examples 3 
presidents = ['Obama',
              'Trump',
              'Washington']

p2 = presidents[:2]
p2.remove('Trump')
print(presidents)  # ['Obama','Trump','Washington']
print(p2)  # ['Obama']



# SLICE ASSIGNMENT 
l = [1, 2, 3, 4, 5]
print("aftermath: ", l[::2])
l[:3] = [42, 41]
print(l) # [42, 41, 4, 5]


l[::2] = [42, 41]
print(l) # [42, 41, 41, 5]








# CAN YOU USE SLICE ASSIGNMENTS FOR STRINGS?
"""
No! 
In contrast to lists, strings are immutable data types.
In other words, strings cannot be changed after they are
created. But the semantics of slice assignments is to replace 
a slice of the original sequence. Due to the immutability, 
Python cannot replace any part of the original
string. Therefore, it throws an error when you attempt
to do slice assignments for strings
"""

# Example 4 
                  
s = "All that glitters is not gold"
print(s[9:-9])
print(s[::10])
print(s[:-4:-1])

# Example 5

x = list('universe')
print(x)
print(x[2:4])
print(x[2::2])


# Example 6 

word = list("galaxy")
print(word[4:50])

# Example 7

lst = list(range(10))
print(lst[1:5:2] + lst[1:5:1])
