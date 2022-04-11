import numpy as np
"""
Built-in practice: range()

In this exercise, you will practice using Python's built-in function range(). Remember that you can use range() in a few different ways:

1) Create a sequence of numbers from 0 to a stop value (which is exclusive). This is useful when you want to create a simple sequence of numbers starting at zero:

range(stop)

# Example
list(range(11))

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

2) Create a sequence of numbers from a start value to a stop value (which is exclusive) with a step size. This is useful when you want to create a sequence of numbers that increments by some value other than one. For example, a list of even numbers:

range(start, stop, step)

# Example
list(range(2,11,2))

[2, 4, 6, 8, 10]

Instructions
100 XP

    Create a range object that starts at zero and ends at five. Only use a stop argument.
    Convert the nums variable into a list called nums_list.
    Create a new list called nums_list2 that starts at one, ends at eleven, and increments by two by unpacking a range object using the star character (*).

"""
# Create a range object that goes from 0 to 5
nums = range(6)
print(type(nums))

# Convert nums to a list
nums_list = list(nums)
print(nums_list)

# Create a new list of odd numbers from 1 to 11 by unpacking a range object
nums_list2 = [*range(1,12,2)]
print(nums_list2)

"""
Built-in practice: enumerate()

In this exercise, you'll practice using Python's built-in function enumerate(). This function is useful for obtaining an indexed list. For example, suppose you had a list of people that arrived at a party you are hosting. The list is ordered by arrival (Jerry was the first to arrive, followed by Kramer, etc.):

names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman']

If you wanted to attach an index representing a person's arrival order, you could use the following for loop:

indexed_names = []
for i in range(len(names)):
    index_name = (i, names[i])
    indexed_names.append(index_name)

[(0,'Jerry'),(1,'Kramer'),(2,'Elaine'),(3,'George'),(4,'Newman')]

But, that's not the most efficient solution. Let's explore how to use enumerate() to make this more efficient.
Instructions
100 XP

    Instead of using for i in range(len(names)), update the for loop to use i as the index variable and name as the iterator variable and use enumerate().
    Rewrite the previous for loop using enumerate() and list comprehension to create a new list, indexed_names_comp.
    Create another list (indexed_names_unpack) by using the star character (*) to unpack the enumerate object created from using enumerate() on names. This time, start the index for enumerate() at one instead of zero.

"""
names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman']
# Rewrite the for loop to use enumerate
indexed_names = []
for key, name in enumerate(names):
    index_name = (key, name)
    indexed_names.append(index_name)
print(indexed_names)

# Rewrite the above for loop using list comprehension
indexed_names_comp = [(key, name) for key, name in enumerate(names)]
print(indexed_names_comp)

# Unpack an enumerate object with a starting index of one
indexed_names_unpack = [*enumerate(names, 1)]
print(indexed_names_unpack)

"""

Built-in practice: map()

In this exercise, you'll practice using Python's built-in map() function to apply a function to every element of an object. Let's look at a list of party guests:

names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman']

Suppose you wanted to create a new list (called names_uppercase) that converted all the letters in each name to uppercase. you could accomplish this with the below for loop:

names_uppercase = []

for name in names:
  names_uppercase.append(name.upper())

['JERRY', 'KRAMER', 'ELAINE', 'GEORGE', 'NEWMAN']

Let's explore using the map() function to do this more efficiently in one line of code.
Instructions
100 XP

    Use map() and the method str.upper() to convert each name in the list names to uppercase. Save this to the variable names_map.
    Print the data type of names_map.
    Unpack the contents of names_map into a list called names_uppercase using the star character (*).
    Print names_uppercase and observe its contents.

"""
# Use map to apply str.upper to each element in names
names_map = map(str.upper, names)

# Print the type of the names_map
print(type(names_map))

# Unpack names_map into a list
names_uppercase = [*names_map]

# Print the list created above
print(names_uppercase)

"""
Practice with NumPy arrays

Let's practice slicing numpy arrays and using NumPy's broadcasting concept. Remember, broadcasting refers to a numpy array's ability to vectorize operations, so they are performed on all elements of an object at once.

A two-dimensional numpy array has been loaded into your session (called nums) and printed into the console for your convenience. numpy has been imported into your session as np.
Instructions 1/2
50 XP

    1
    2

    Print the second row of nums.
    Print the items of nums that are greater than six.
    Create nums_dbl that doubles each number in nums.
    Replace the third column in nums with a new column that adds 1 to each item in the original column.

"""
numsi = [
    [ 1,  2,  3, 10,  5],
    [ 6,  7,  8, 15, 10]
 ]
nums = np.array(numsi)
# Print second row of nums
print(nums[1,: ])

# Print all elements of nums that are greater than six
print(nums[nums > 6])

# Double every element of nums
nums_dbl = nums * 2
print(nums_dbl)

# Replace the third column of nums
nums[:, 2] = nums[:, 2] + 1
print(nums)

"""
Bringing it all together: Festivus!

In this exercise, you will be throwing a party—a Festivus if you will!

You have a list of guests (the names list). Each guest, for whatever reason, has decided to show up to the party in 10-minute increments. For example, Jerry shows up to Festivus 10 minutes into the party's start time, Kramer shows up 20 minutes into the party, and so on and so forth.

We want to write a few simple lines of code, using the built-ins we have covered, to welcome each of your guests and let them know how many minutes late they are to your party. Note that numpy has been imported into your session as np and the names list has been loaded as well.

Let's welcome your guests!

* Use range() to create a list of arrival times (10 through 50 incremented by 10). Create the list arrival_times by unpacking the range object.

* You realize your clock is three minutes fast. Convert the arrival_times list into a numpy array (called arrival_times_np) and use NumPy broadcasting to subtract three minutes from each arrival time.
"""
# Create a list of arrival times
arrival_times = [*range(10, 51, 10)]

print(arrival_times)


# Convert arrival_times to an array and update the times
arrival_times_np = np.array(arrival_times)
new_times = arrival_times_np - 3

print(new_times)
