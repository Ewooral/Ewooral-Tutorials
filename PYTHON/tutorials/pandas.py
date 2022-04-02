# Import pandas as pd
# pipenv install pandas

import pandas as pd

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
