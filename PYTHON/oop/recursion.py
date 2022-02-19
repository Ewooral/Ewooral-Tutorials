counter = 0
def recurse():
    global counter # this is the global variable that counts the number of times the function is called 
    if counter == 888: return "done!"
    counter += 1
    print(counter)
    return recurse()


print(recurse())
print(counter)
# A base case in recursion stops the  loop at some point.
# The global keyword is used to access the global variable. 
