# Import pandas as pd
from itertools import count
import pandas as pd

# pipenv install pandas

# import numpy as np
import numpy as np

"""
Dictionary to DataFrame (1)

Pandas is an open source library, providing high-performance, easy-to-use data structures and data analysis tools for Python. Sounds promising!

The DataFrame is one of Pandas' most important data structures. It's basically a way to store tabular data where you can label the rows and the columns. One way to build a DataFrame is from a dictionary.

In the exercises that follow you will be working with vehicle data from different countries. Each observation corresponds to a country and the columns give information about the number of vehicles per capita, whether people drive left or right, and so on.

Three lists are defined in the script:

    names, containing the country names for which data is available.
    dr, a list with booleans that tells whether people drive left or right in the corresponding country.
    cpc, the number of motor vehicles per 1000 people in the corresponding country.

Each dictionary key is a column label and each value is a list which contains the column elements.
Instructions
100 XP

    Import pandas as pd.
    Use the pre-defined lists to create a dictionary called my_dict. There should be three key value pairs:
        key 'country' and value names.
        key 'drives_right' and value dr.
        key 'cars_per_cap' and value cpc.
    Use pd.DataFrame() to turn your dict into a DataFrame called cars.
    Print out cars and see how beautiful it is.


"""


# Pre-defined lists
names = ['United States', 'Australia', 'Japan',
         'India', 'Russia', 'Morocco', 'Egypt']
dr = [True, False, False, False, True, True, True]
cpc = [809, 731, 588, 18, 200, 70, 45]



# Create dictionary my_dict with three key:value pairs: my_dict
my_dict = {
    "country": names,
    "drives_right": dr,
    "cars_per_cap": cpc
}

# Build a DataFrame cars from my_dict: cars
cars = pd.DataFrame(my_dict)

# Print cars
print(".......................................................")
print(cars)

print("\n")
"""


Dictionary to DataFrame (2)

The Python code that solves the previous exercise is included in the script. Have you noticed that the row labels (i.e. the labels for the different observations) were automatically set to integers from 0 up to 6?

To solve this a list row_labels has been created. You can use it to specify the row labels of the cars DataFrame. You do this by setting the index attribute of cars, that you can access as cars.index.
Instructions
100 XP

    Hit Run Code to see that, indeed, the row labels are not correctly set.
    Specify the row labels by setting cars.index equal to row_labels.
    Print out cars again and check if the row labels are correct this time.

"""

# Definition of row_labels
row_labels = ['US', 'AUS', 'JPN', 'IN', 'RU', 'MOR', 'EG']

# Specify row labels of cars
cars.index = row_labels

# Print cars
print(".......................................................")
print(cars)



"""
CSV to DataFrame (1)

Putting data in a dictionary and then building a DataFrame works, but it's not very efficient. What if you're dealing with millions of observations? In those cases, the data is typically available as files with a regular structure. One of those file types is the CSV file, which is short for "comma-separated values".

To import CSV data into Python as a Pandas DataFrame you can use read_csv().

Let's explore this function with the same cars data from the previous exercises. This time, however, the data is available in a CSV file, named cars.csv. It is available in your current working directory, so the path to the file is simply 'cars.csv'.
Instructions
100 XP

    To import CSV files you still need the pandas package: import it as pd.
    Use pd.read_csv() to import cars.csv data as a DataFrame. Store this DataFrame as cars.
    Print out cars. Does everything look OK?

"""
print(".......................................................")

# Import the cars.csv data: cars
# cars = pd.read_csv("./cars.csv")

# Print out cars
print(cars)

"""
CSV to DataFrame (2)

Your read_csv() call to import the CSV data didn't generate an error, but the output is not entirely what we wanted. The row labels were imported as another column without a name.

Remember index_col, an argument of read_csv(), that you can use to specify which column in the CSV file should be used as a row label? Well, that's exactly what you need here!

Python code that solves the previous exercise is already included; can you make the appropriate changes to fix the data import?
Instructions
100 XP

    Run the code with Run Code and assert that the first column should actually be used as row labels.
    Specify the index_col argument inside pd.read_csv(): set it to 0, so that the first column is used as row labels.
    Has the printout of cars improved now?

"""
print(".......................................................")
# Fix import by including index_col
# cars = pd.read_csv("./cars.csv")

# Print out cars
print(cars)



"""
Square Brackets (1)

In the video, you saw that you can index and select Pandas DataFrames in many different ways. The simplest, but not the most powerful way, is to use square brackets.

In the sample code, the same cars data is imported from a CSV files as a Pandas DataFrame. To select only the cars_per_cap column from cars, you can use:

cars['cars_per_cap']
cars[['cars_per_cap']]

The single bracket version gives a Pandas Series, the double bracket version gives a Pandas DataFrame.
Instructions
100 XP

    Use single square brackets to print out the country column of cars as a Pandas Series.
    Use double square brackets to print out the country column of cars as a Pandas DataFrame.
    Use double square brackets to print out a DataFrame with both the country and drives_right columns of cars, in this order.

"""
print(".......................................................")

# Import cars data
# cars = pd.read_csv("./cars.csv", index_col=0)

# Print out country column as Pandas Series
print(cars['country'])

print(".......................................................")
# Print out country column as Pandas DataFrame
print(cars[['country']])

print(".......................................................")
# Print out DataFrame with country and drives_right columns
print(cars[['country', 'drives_right']])

"""


Square Brackets (2)

Square brackets can do more than just selecting columns. You can also use them to get rows, or observations, from a DataFrame. The following call selects the first five rows from the cars DataFrame:

cars[0:5]

The result is another DataFrame containing only the rows you specified.

Pay attention: You can only select rows using square brackets if you specify a slice, like 0:4. Also, you're using the integer indexes of the rows here, not the row labels!
Instructions
100 XP

    Select the first 3 observations from cars and print them out.
    Select the fourth, fifth and sixth observation, corresponding to row indexes 3, 4 and 5, and print them out.

"""
print(".......................................................")
# Print out first 3 observations
print(cars[:3])

print(".......................................................")
# Print out fourth, fifth and sixth observation
print(cars[3:6])

"""
loc and iloc (1)

With loc and iloc you can do practically any data selection operation on DataFrames you can think of. loc is label-based, which means that you have to specify rows and columns based on their row and column labels. iloc is integer index based, so you have to specify rows and columns by their integer index like you did in the previous exercise.

Try out the following commands in the IPython Shell to experiment with loc and iloc to select observations. Each pair of commands here gives the same result.

cars.loc['RU']
cars.iloc[4]

cars.loc[['RU']]
cars.iloc[[4]]

cars.loc[['RU', 'AUS']]
cars.iloc[[4, 1]]

As before, code is included that imports the cars data as a Pandas DataFrame.
Instructions
100 XP

    Use loc or iloc to select the observation corresponding to Japan as a Series. The label of this row is JPN, the index is 2. Make sure to print the resulting Series.
    Use loc or iloc to select the observations for Australia and Egypt as a DataFrame. You can find out about the labels/indexes of these rows by inspecting cars in the IPython Shell. Make sure to print the resulting DataFrame.

"""

print(".......................................................")
# Print out observation for Japan
print(cars.iloc[2])

print(".......................................................")
# Print out observations for Australia and Egypt
print(cars.iloc[[1, 6]])


"""
loc and iloc (2)

loc and iloc also allow you to select both rows and columns from a DataFrame. To experiment, try out the following commands in the IPython Shell. Again, paired commands produce the same result.

cars.loc['IN', 'cars_per_cap']
cars.iloc[3, 0]

cars.loc[['IN', 'RU'], 'cars_per_cap']
cars.iloc[[3, 4], 0]

cars.loc[['IN', 'RU'], ['cars_per_cap', 'country']]
cars.iloc[[3, 4], [0, 1]]

Instructions
100 XP

    Print out the drives_right value of the row corresponding to Morocco (its row label is MOR)
    Print out a sub-DataFrame, containing the observations for Russia and Morocco and the columns country and drives_right.

"""

print(".......................................................")
# Print out drives_right value of Morocco
print(cars.loc['MOR', 'drives_right'])


print(".......................................................")
# Print sub-DataFrame
print(cars.loc[['RU', 'MOR'], ['country', 'drives_right']])


"""
loc and iloc (3)

It's also possible to select only columns with loc and iloc. In both cases, you simply put a slice going from beginning to end in front of the comma:

cars.loc[:, 'country']
cars.iloc[:, 1]

cars.loc[:, ['country','drives_right']]
cars.iloc[:, [1, 2]]

Instructions
100 XP

    Print out the drives_right column as a Series using loc or iloc.
    Print out the drives_right column as a DataFrame using loc or iloc.
    Print out both the cars_per_cap and drives_right column as a DataFrame using loc or iloc.

"""

print(".......................................................")

# Print out drives_right column as Series
series = cars.iloc[:, [2]]
print(series)

print(".......................................................")
# Print out drives_right column as DataFrame
DataFrame = cars.iloc[:, 2]
print(DataFrame)

print(".......................................................")
# Print out cars_per_cap and drives_right as DataFrame
DataFrame = cars.iloc[:, [1, 2]]
print(DataFrame)

"""
Equality

To check if two Python values, or variables, are equal you can use ==. To check for inequality, you need !=. As a refresher, have a look at the following examples that all result in True. Feel free to try them out in the IPython Shell.

2 == (1 + 1)
"intermediate" != "python"
True != False
"Python" != "python"

When you write these comparisons in a script, you will need to wrap a print() function around them to see the output.
Instructions
100 XP

    In the editor on the right, write code to see if True equals False.
    Write Python code to check if -5 * 15 is not equal to 75.
    Ask Python whether the strings "pyscript" and "PyScript" are equal.
    What happens if you compare booleans and integers? Write code to see if True and 1 are equal.

"""
print("...........................................")
# Comparison of booleans
print(True == False)

print("...........................................")
# Comparison of integers
print((-5 * 15) != 75)

print("...........................................")
# Comparison of strings
print("pyscript" == "PyScript")

print("...........................................")
# Compare a boolean with an integer
print(True == 1)



"""
Greater and less than

In the video, Hugo also talked about the less than and greater than signs, < and > in Python. You can combine them with an equals sign: <= and >=. Pay attention: <= is valid syntax, but =< is not.

All Python expressions in the following code chunk evaluate to True:

3 < 4
3 <= 4
"alpha" <= "beta"

Remember that for string comparison, Python determines the relationship based on alphabetical order.
Instructions
100 XP

    Write Python expressions, wrapped in a print() function, to check whether:
        x is greater than or equal to -10. x has already been defined for you.
        "test" is less than or equal to y. y has already been defined for you.
        True is greater than False.

"""
print("...........................................")

# Comparison of integers
x = -3 * 6
print(x >= -10)

# Comparison of strings
y = "test"
print("test" <= y)


# Comparison of booleans
print(True > False)

"""
Compare arrays

Out of the box, you can also use comparison operators with NumPy arrays.

Remember areas, the list of area measurements for different rooms in your house from Introduction to Python? This time there's two NumPy arrays: my_house and your_house. They both contain the areas for the kitchen, living room, bedroom and bathroom in the same order, so you can compare them.
Instructions
100 XP

Using comparison operators, generate boolean arrays that answer the following questions:

    Which areas in my_house are greater than or equal to 18?
    You can also compare two NumPy arrays element-wise. Which areas in my_house are smaller than the ones in your_house?
    Make sure to wrap both commands in a print() statement so that you can inspect the output!


"""
print("...........................................")

my_house = np.array([18.0, 20.0, 10.75, 9.50])

print("...........................................")
your_house = np.array([14.0, 24.0, 14.25, 9.0])

print("...........................................")
# my_house greater than or equal to 18
print(my_house >= 18)

print("...........................................")
# my_house less than your_house
print(my_house < your_house)

"""
and, or, not (1)

A boolean is either 1 or 0, True or False. With boolean operators such as and, or and not, you can combine these booleans to perform more advanced queries on your data.

In the sample code, two variables are defined: my_kitchen and your_kitchen, representing areas.
Instructions
100 XP

    Write Python expressions, wrapped in a print() function, to check whether:
        my_kitchen is bigger than 10 and smaller than 18.
        my_kitchen is smaller than 14 or bigger than 17.
        double the area of my_kitchen is smaller than triple the area of your_kitchen.

"""
print("...........................................")
# Define variables
my_kitchen = 18.0
your_kitchen = 14.0

# my_kitchen bigger than 10 and smaller than 18?
print(my_kitchen > 10 and my_kitchen < 18)

print("...........................................")
# my_kitchen smaller than 14 or bigger than 17?
print(my_kitchen < 14 or my_kitchen > 17)

print("...........................................")
# Double my_kitchen smaller than triple your_kitchen?
print(2 * my_kitchen < 3 * your_kitchen)

"""
Boolean operators with NumPy

Before, the operational operators like < and >= worked with NumPy arrays out of the box. Unfortunately, this is not true for the boolean operators and, or, and not.

To use these operators with NumPy, you will need 
np.logical_and(), 
np.logical_or() and 
np.logical_not(). 
Here's an example on the my_house and your_house arrays from before to give you an idea:

np.logical_and(my_house > 13, 
               your_house < 15)

Instructions
100 XP

    Generate boolean arrays that answer the following questions:
    Which areas in my_house are greater than 18.5 or smaller than 10?
    Which areas are smaller than 11 in both my_house and your_house? Make sure to wrap both commands in print() statement, so that you can inspect the output.
"""
print("...........................................")

my_house = np.array([18.0, 20.0, 10.75, 9.50])
your_house = np.array([14.0, 24.0, 14.25, 9.0])

print("...........................................")
# my_house greater than 18.5 or smaller than 10
print(np.logical_or(my_house > 18, my_house < 10))

print("...........................................")
# Both my_house and your_house smaller than 11
print(np.logical_and(my_house < 11, your_house < 11))

"""
Driving right (1)

Remember that cars dataset, containing the cars per 1000 people (cars_per_cap) and whether people drive right (drives_right) for different countries (country)? The code that imports this data in CSV format into Python as a DataFrame is included in the script.

In the video, you saw a step-by-step approach to filter observations from a DataFrame based on boolean arrays. Let's start simple and try to find all observations in cars where drives_right is True.

drives_right is a boolean column, so you'll have to extract it as a Series and then use this boolean Series to select observations from cars.
Instructions
100 XP

    Extract the drives_right column as a Pandas Series and store it as dr.
    Use dr, a boolean Series, to subset the cars DataFrame. Store the resulting selection in sel.
    Print sel, and assert that drives_right is True for all observations.
"""
print("...........................................")



# Extract drives_right column as Series: dr
dr = cars["drives_right"]
# print(dr)

# Use dr to subset cars: sel
sel = cars[dr]


# Print sel
print(sel)

print("...........................................")
# Convert the code to a one-liner that calculates the variable sel as before.
# Convert code to a one-liner
sel = cars[cars['drives_right']]

# Print sel
print(sel)

"""
Cars per capita (1)

Let's stick to the cars data some more. This time you want to find out which countries have a high cars per capita figure. In other words, in which countries do many people have a car, or maybe multiple cars.

Similar to the previous example, you'll want to build up a boolean Series, that you can then use to subset the cars DataFrame to select certain observations. If you want to do this in a one-liner, that's perfectly fine!
Instructions
100 XP

    Select the cars_per_cap column from cars as a Pandas Series and store it as cpc.
    Use cpc in combination with a comparison operator and 500. You want to end up with a boolean Series that's True if the corresponding country has a cars_per_cap of more than 500 and False otherwise. Store this boolean Series as many_cars.
    Use many_cars to subset cars, similar to what you did before. Store the result as car_maniac.
    Print out car_maniac to see if you got it right.

"""
print("...........................................")

# Create car_maniac: observations that have a cars_per_cap over 500
cpc = cars["cars_per_cap"]
many_cars = cpc > 500

car_maniac = cars[many_cars]

# Print car_maniac
print(car_maniac)


"""

Cars per capita (2)

Remember about np.logical_and(), np.logical_or() and np.logical_not(), the NumPy variants of the and, or and not operators? You can also use them on Pandas Series to do more advanced filtering operations.

Take this example that selects the observations that have a cars_per_cap between 10 and 80. Try out these lines of code step by step to see what's happening.

cpc = cars['cars_per_cap']
between = np.logical_and(cpc > 10, cpc < 80)
medium = cars[between]

Instructions
100 XP

    Use the code sample provided to create a DataFrame medium, that includes all the observations of cars that have a cars_per_cap between 100 and 500.
    Print out medium.

"""
print("...........................................")

# Create medium: observations with cars_per_cap between 100 and 500
print(cars["cars_per_cap"])

cpc = cars['cars_per_cap']
between = np.logical_and(cpc > 100, cpc < 500)
medium = cars[between]
print("...........................................")
# Print medium
print(medium)

"""
Basic while loop

Below you can find the example from the video where the error variable, initially equal to 50.0, is divided by 4 and printed out on every run:

error = 50.0
while error > 1 :
    error = error / 4
    print(error)

This example will come in handy, because it's time to build a while loop yourself! We're going to code a while loop that implements a very basic control system for an inverted pendulum. If there's an offset from standing perfectly straight, the while loop will incrementally fix this offset.

Note that if your while loop takes too long to run, you might have made a mistake. In particular, remember to indent the contents of the loop using four spaces or auto-indentation!
Instructions
100 XP

    Create the variable offset with an initial value of 8.
    Code a while loop that keeps running as long as offset is not equal to 0. Inside the while loop:
        Print out the sentence "correcting...".
        Next, decrease the value of offset by 1. You can do this with offset = offset - 1.
        Finally, still within your loop, print out offset so you can see how it changes.
"""
print("...........................................")
# Initialize offset
offset = 8

# Code the while loop
while offset != 0:
    print("correcting...")
    offset = offset - 1

    print(offset)


"""
Add conditionals

The while loop that corrects the offset is a good start, but what if offset is negative? You can try to run the following code where offset is initialized to -6:

# Initialize offset
offset = -6

# Code the while loop
while offset != 0 :
    print("correcting...")
    offset = offset - 1
    print(offset)

but your session will be disconnected. The while loop will never stop running, because offset will be further decreased on every run. offset != 0 will never become False and the while loop continues forever.

Fix things by putting an if-else statement inside the while loop. If your code is still taking too long to run, you probably made a mistake!
Instructions
100 XP

    Inside the while loop, complete the if-else statement:
        If offset is greater than zero, you should decrease offset by 1.
        Else, you should increase offset by 1.
    If you've coded things correctly, hitting Submit Answer should work this time.

If your code is still taking too long to run (or your session is expiring), you probably made a mistake. Check your code and make sure that the statement offset != 0 will eventually evaluate to FALSE!
"""
print("...........................................")
# Initialize offset
offset = -6

# Code the while loop
while offset != 0:
    print("correcting...")
    if offset > 0:
      offset -= 1
    else:
      offset += 1
    print(offset)

"""
Indexes and values (1)

Using a for loop to iterate over a list only gives you access to every list element in each run, one after the other. If you also want to access the index information, so where the list element you're iterating over is located, you can use enumerate().

As an example, have a look at how the for loop from the video was converted:

fam = [1.73, 1.68, 1.71, 1.89]
for index, height in enumerate(fam) :
    print("person " + str(index) + ": " + str(height))

Instructions
100 XP

    Adapt the for loop in the sample code to use enumerate() and use two iterator variables.
    Update the print() statement so that on each run, a line of the form "room x: y" should be printed, where x is the index of the list element and y is the actual list element, i.e. the area. Make sure to print out this exact string, with the correct spacing.


"""

print("...........................................")
areas = [11.25, 18.0, 20.0, 10.75, 9.50]
for index, area in enumerate(areas):
    print("room " + str(index) + ": " + str(area))

"""
Indexes and values (2)

For non-programmer folks, room 0: 11.25 is strange. Wouldn't it be better if the count started at 1?
Instructions
70 XP

Adapt the print() function in the for loop so that the first printout becomes "room 1: 11.25", the second one "room 2: 18.0" and so on.
"""
# Code the for loop
print("...........................................")
for index, area in enumerate(areas):
    print("room " + str(index + 1) + ": " + str(area))


"""
Loop over list of lists

Remember the house variable from the Intro to Python course? Have a look at its definition in the script. It's basically a list of lists, where each sublist contains the name and area of a room in your house.

It's up to you to build a for loop from scratch this time!
Instructions
0 XP

Write a for loop that goes through each sublist of house and prints out the x is y sqm, where x is the name of the room and y is the area of the room.

"""
print("...........................................")
# house list of lists
house = [["hallway", 11.25],
         ["kitchen", 18.0],
         ["living room", 20.0],
         ["bedroom", 10.75],
         ["bathroom", 9.50]]

# Build a for loop from scratch
for x in house:
    print("the " + x[0] + " is " + str(x[1]) + " sqm")


"""
Loop over dictionary

In Python 3, you need the items() method to loop over a dictionary:

world = { "afghanistan":30.55, 
          "albania":2.77,
          "algeria":39.21 }

for key, value in world.items() :
    print(key + " -- " + str(value))

Remember the europe dictionary that contained the names of some European countries as key and their capitals as corresponding value? Go ahead and write a loop to iterate over it!
Instructions
100 XP

Write a for loop that goes through each key:value pair of europe. On each iteration, "the capital of x is y" should be printed out, where x is the key and y is the value of the pair.
"""
print("...........................................")
# Definition of dictionary
europe = {'spain': 'madrid', 'france': 'paris', 'germany': 'berlin',
          'norway': 'oslo', 'italy': 'rome', 'poland': 'warsaw', 'austria': 'vienna'}

# Iterate over europe
for key, value in europe.items():
    print("the capital of ", key, " is ", value)


"""
Loop over DataFrame (1)

Iterating over a Pandas DataFrame is typically done with the iterrows() method. Used in a for loop, every observation is iterated over and on every iteration the row label and actual row contents are available:

for lab, row in brics.iterrows() :
    ...

In this and the following exercises you will be working on the cars DataFrame. It contains information on the cars per capita and whether people drive right or left for seven countries in the world.
Instructions
100 XP

Write a for loop that iterates over the rows of cars and on each iteration perform two print() calls: one to print out the row label and one to print out all of the rows contents.

"""
print("............................................")
for country, row in cars.iterrows():
    print(country)
    print(row)
    print("............................................")




"""
Loop over DataFrame (2)

The row data that's generated by iterrows() on every run is a Pandas Series. This format is not very convenient to print out. Luckily, you can easily select variables from the Pandas Series using square brackets:

for lab, row in brics.iterrows() :
    print(row['country'])

Instructions
100 XP

    Using the iterators lab and row, adapt the code in the for loop such that the first iteration prints out "US: 809", the second iteration "AUS: 731", and so on.
    The output should be in the form "country: cars_per_cap". Make sure to print out this exact string (with the correct spacing).
        You can use str() to convert your integer data to a string so that you can print it in conjunction with the country label.

"""
# print("............................................")
for lab, row in cars.iterrows():
    print(lab + ":", row["cars_per_cap"])



"""
Add column (1)

In the video, Hugo showed you how to add the length of the country names of the brics DataFrame in a new column:

for lab, row in brics.iterrows() :
    brics.loc[lab, "name_length"] = len(row["country"])

You can do similar things on the cars DataFrame.
Instructions
100 XP

    Use a for loop to add a new column, named COUNTRY, that contains a uppercase version of the country names in the "country" column. You can use the string method upper() for this.
    To see if your code worked, print out cars. Don't indent this code, so that it's not part of the for loop.

# hint
In the body of the for loop, it seems that you're not properly updating
the "COUNTRY" column of cars. If you use lab, row as iterator variables, 
you can use cars.loc[lab, "COUNTRY"] = row["country"].upper() to do the proper updates.
"""
print("............................................")

# Code for loop that adds COUNTRY column
for country, row in cars.iterrows():
    cars.loc[country, "COUNTRY"] = row["country"].upper()


# Print cars
print(cars)

"""
Add column (2)

Using iterrows() to iterate over every observation of a Pandas DataFrame is easy to understand, but not very efficient. On every iteration, you're creating a new Pandas Series.

If you want to add a column to a DataFrame by calling a function on another column, the iterrows() method in combination with a for loop is not the preferred way to go. Instead, you'll want to use apply().

Compare the iterrows() version with the apply() version to get the same result in the brics DataFrame:

for lab, row in brics.iterrows() :
    brics.loc[lab, "name_length"] = len(row["country"])

brics["name_length"] = brics["country"].apply(len)

We can do a similar thing to call the upper() method on every name in the country column. However, upper() is a method, so we'll need a slightly different approach:
Instructions
100 XP

    Replace the for loop with a one-liner that uses .apply(str.upper). The call should give the same result: a column COUNTRY should be added to cars, containing an uppercase version of the country names.
    As usual, print out cars to see the fruits of your hard labor

"""
print(".........................................")
cars["COUNTRY"] = cars["country"].apply(str.upper)
print(cars);
