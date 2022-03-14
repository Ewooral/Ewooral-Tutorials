def recurse(counter = 0):
    if counter == 88: 
        return "done!"
    new_counter = counter + 1
    return recurse(new_counter)


print(recurse())
# print(counter)
# A base case in recursion stops the  loop at some point.
# The global keyword is used to access the global variable. 
