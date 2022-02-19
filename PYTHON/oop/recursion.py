counter = 0
def recurse():
    counter += 1
    print(counter)
    recurse()

recurse()

# A base case in recursion stops the  loop at some point.