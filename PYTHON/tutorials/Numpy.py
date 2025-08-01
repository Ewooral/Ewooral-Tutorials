# Import numpy
import numpy as np

newme = np.array([1, 9, 2, 3, 4, 5, 6, 7]); 

print(newme);
bmi = newme/newme**2;
print(bmi);

# Create baseball, a list of lists
baseball = [
    [74, 180], [74, 215], [72, 210], [72, 210],
    [73, 188], [69, 176], [69, 209], [71, 200], [76, 231],
    [71, 180], [73, 188], [73, 180], [74, 185], [74, 160],
    [69, 180], [70, 185], [73, 189], [75, 185], [78, 219],
    [79, 230], [76, 205], [74, 230], [76, 195], [72, 180], [71, 192], [75, 225], [77, 203], [74, 195], [73, 182], [74, 188], [78, 200], [73, 180], [75, 200], [73, 200], [75, 245], [75, 240], [74, 215], [69, 185], [71, 175], [74, 199], [73, 200], [73, 215], [76, 200], [74, 205], [74, 206], [70, 186], [72, 188], [77, 220], [74, 210], [70, 195], [73, 200], [75, 200], [76, 212], [76, 224], [78, 210], [74, 205], [74, 220], [76, 195], [77, 200], [81, 260], [78, 228], [75, 270], [77, 200], [75, 210], [76, 190], [74, 220], [72, 180], [72, 205], [75, 210], [73, 220], [73, 211], [73, 200], [70, 180], [70, 190], [70, 170], [76, 230], [68, 155], [71, 185], [72, 185], [75, 200], [75, 225], [75, 225], [75, 220], [68, 160], [74, 205], [78, 235], [71, 250], [73, 210], [76, 190], [74, 160], [74, 200], [79, 205], [75, 222], [73, 195], [76, 205], [74, 220], [74, 220], [73, 170], [72, 185], [74, 195], [73, 220], [74, 230], [72, 180], [73, 220], [69, 180], [72, 180], [73, 170], [75, 210], [75, 215], [73, 200], [72, 213], [72, 180], [76, 192], [74, 235], [72, 185], [77, 235], [74, 210], [77, 222], [75, 210], [76, 230], [80, 220], [74, 180], [74, 190], [75, 200], [78, 210], [73, 194], [73, 180], [74, 190], [75, 240], [76, 200], [71, 198], [73, 200], [74, 195], [76, 210], [76, 220], [74, 190], [73, 210], [74, 225], [70, 180], [72, 185], [73, 170], [73, 185], [73, 185], [73, 180], [71, 178], [74, 175], [74, 200], [72, 204], [74, 211], [71, 190], [74, 210], [73, 190], [75, 190], [75, 185], [79, 290], [73, 175], [75, 185], [76, 200], [74, 220], [76, 170], [78, 220], [74, 190], [76, 220], [72, 205], [74, 200], [76, 250], [74, 225], [75, 215], [78, 210], [75, 215], [72, 195], [74, 200], [72, 194], [74, 220], [70, 180], [71, 180], [70, 170], [75, 195], [71, 180], [71, 170], [73, 206], [72, 205], [71, 200], [73, 225], [72, 201], [75, 225], [74, 233], [74, 180], [75, 225], [73, 180], [77, 220], [73, 180], [76, 237], [75, 215], [74, 190], [76, 235], [75, 190], [73, 180], [71, 165], [76, 195], [75, 200], [72, 190], [71, 190], [77, 185], [73, 185], [74, 205], [71, 190], [72, 205], [74, 206], [75, 220], [73, 208], [72, 170], [75, 195], [75, 210], [74, 190], [72, 211], [74, 230], [71, 170], [70, 185], [74, 185], [77, 241], [77, 225], [75, 210], [75, 175], [78, 230], [75, 200], [76, 215], [73, 198], [75, 226], [75, 278], [79, 215], [77, 230], [76, 240], [71, 184], [75, 219], [74, 170], [69, 218], [71, 190], [76, 225], [72, 220], [72, 176], [70, 190], [72, 197], [73, 204], [71, 167], [72, 180], [71, 195], [73, 220], [72, 215], [73, 185], [74, 190], [74, 205], [72, 205], [75, 200], [74, 210], [74, 215], [77, 200], [75, 205], [73, 211], [72, 190], [71, 208], [74, 200], [77, 210], [75, 232], [75, 230], [75, 210], [78, 220], [78, 210], [74, 202], [76, 212], [78, 225], [76, 170], [70, 190], [72, 200], [80, 237], [74, 220], [74, 170], [71, 193], [70, 190], [72, 150], [71, 220], [74, 200], [71, 190], [72, 185], [71, 185], [74, 200], [69, 172], [76, 220], [75, 225], [75, 190], [76, 195], [73, 219], [76, 190], [73, 197], [77, 200], [73, 195], [72, 210], [72, 177], [77, 220], [77, 235], [71, 180], [74, 195], [74, 195], [73, 190], [78, 230], [75, 190], [73, 200], [70, 190], [74, 190], [72, 200], [73, 200], [73, 184], [75, 200], [75, 180], [74, 219], [76, 187], [73, 200], [74, 220], [75, 205], [75, 190], [72, 170], [73, 160], [73, 215], [72, 175], [74, 205], [78, 200], [76, 214], [73, 200], [74, 190], [75, 180], [70, 205], [75, 220], [71, 190], [72, 215], [78, 235], [75, 191], [73, 200], [73, 181], [71, 200], [75, 210], [77, 240], [72, 185], [69, 165], [73, 190], [74, 185], [72, 175], [70, 155], [75, 210], [70, 170], [72, 175], [72, 220], [74, 210], [73, 205], [74, 200], [76, 205], [75, 195], [80, 240], [72, 150], [75, 200], [73, 215], [74, 202], [74, 200], [73, 190], [75, 205], [75, 190], [71, 160], [73, 215], [75, 185], [74, 200], [74, 190], [72, 210], [74, 185], [74, 220], [74, 190], [73, 202], [76, 205], [75, 220], [72, 175], [73, 160], [73, 190], [73, 200], [72, 229], [72, 206], [72, 220], [72, 180], [71, 195], [75, 175], [75, 188], [74, 230], [73, 190], [75, 200], [79, 190], [74, 219], [76, 235], [73, 180], [74, 180], [74, 180], [72, 200], [74, 234], [74, 185], [75, 220], [78, 223], [74, 200], [74, 210], [74, 200], [77, 210], [70, 190], [73, 177], [74, 227], [73, 180], [71, 195], [75, 199], [71, 175], [72, 185], [77, 240], [74, 210], [70, 180], [77, 194], [73, 225], [72, 180], [76, 205], [71, 193], [76, 230], [78, 230], [75, 220], [73, 200], [78, 249], [74, 190], [79, 208], [75, 245], [76, 250], [72, 160], [75, 192], [75, 220], [70, 170], [72, 197], [70, 155], [74, 190], [71, 200], [76, 220], [73, 210], [76, 228], [71, 190], [69, 160], [72, 184], [72, 180], [69, 180], [73, 200], [69, 176], [73, 160], [74, 222], [74, 211], [72, 195], [71, 200], [72, 175], [72, 206], [76, 240], [76, 185], [76, 260], [74, 185], [76, 221], [75, 205], [71, 200], [72, 170], [71, 201], [73, 205], [75, 185], [76, 205], [75, 245], [71, 220], [75, 210], [74, 220], [72, 185], [73, 175], [73, 170], [73, 180], [73, 200], [76, 210], [72, 175], [76, 220], [73, 206], [73, 180], [73, 210], [75, 195], [75, 200], [77, 200], [73, 164], [72, 180], [75, 220], [70, 195], [74, 205], [72, 170], [80, 240], [71, 210], [71, 195], [74, 200], [74, 205], [73, 192], [75, 190], [76, 170], [73, 240], [77, 200], [72, 205], [73, 175], [77, 250], [76, 220], [71, 224], [75, 210], [73, 195], [74, 180], [77, 245], [71, 175], [72, 180], [73, 215], [69, 175], [73, 180], [70, 195], [74, 230], [76, 230], [73, 205], [73, 215], [75, 195], [73, 180], [79, 205], [74, 180], [73, 190], [74, 180], [77, 190], [75, 190], [74, 220], [73, 210], [77, 255], [73, 190], [77, 230], [74, 200], [74, 205], [73, 210], [77, 225], [74, 215], [77, 220], [75, 205], [77, 200], [75, 220], [71, 197], [74, 225], [70, 187], [79, 245], [72, 185], [72, 185], [70, 175], [74, 200], [74, 180], [72, 188], [73, 225], [72, 200], [74, 210], [74, 245], [76, 213], [82, 231], [74, 165], [74, 228], [70, 210], [73, 250], [73, 191], [74, 190], [77, 200], [72, 215], [76, 254], [73, 232], [73, 180], [72, 215], [74, 220], [74, 180], [71, 200], [72, 170], [75, 195], [74, 210], [74, 200], [77, 220], [70, 165], [71, 180], [73, 200], [76, 200], [71, 170], [75, 224], [74, 220], [72, 180], [76, 198], [79, 240], [76, 239], [73, 185], [76, 210], [78, 220], [75, 200], [76, 195], [72, 220], [72, 230], [73, 170], [73, 220], [75, 230], [71, 165], [76, 205], [70, 192], [75, 210], [74, 205], [75, 200], [73, 210], [71, 185], [71, 195], [72, 202], [73, 205], [73, 195], [72, 180], [69, 200], [73, 185], [78, 240], [71, 185], [73, 220], [75, 205], [76, 205], [70, 180], [74, 201], [77, 190], [75, 208], [79, 240], [72, 180], [77, 230], [73, 195], [75, 215], [75, 190], [75, 195], [73, 215], [73, 215], [76, 220], [77, 220], [75, 230], [70, 195], [71, 190], [71, 195], [75, 209], [74, 204], [69, 170], [70, 185], [75, 205], [72, 175], [75, 210], [73, 190], [72, 180], [72, 180], [72, 160], [76, 235], [75, 200], [74, 210], [69, 180], [73, 190], [72, 197], [72, 203], [75, 205], [77, 170], [76, 200], [80, 250], [77, 200], [76, 220], [79, 200], [71, 190], [75, 170], [73, 190], [76, 220], [77, 215], [73, 206], [76, 215], [70, 185], [75, 235], [73, 188], [75, 230], [70, 195], [69, 168], [71, 190], [72, 160], [72, 200], [73, 200], [70, 189], [70, 180], [73, 190], [76, 200], [75, 220], [72, 187], [73, 240], [79, 190], [71, 180], [72, 185], [74, 210], [74, 220], [74, 219], [72, 190], [76, 193], [76, 175], [72, 180], [72, 215], [71, 210], [72, 200], [72, 190], [70, 185], [77, 220], [74, 170], [72, 195], [76, 205], [71, 195], [76, 210], [71, 190], [73, 190], [70, 180], [73, 220], [73, 190], [72, 186], [71, 185], [71, 190], [71, 180], [72, 190], [72, 170], [74, 210], [74, 240], [74, 220], [71, 180], [72, 210], [75, 210], [72, 195], [71, 160], [72, 180], [72, 205], [72, 200], [72, 185], [74, 245], [74, 190], [77, 210], [75, 200], [73, 200], [75, 222], [73, 215], [76, 240], [72, 170], [77, 220], [75, 156], [72, 190], [71, 202], [71, 221], [75, 200], [72, 190], [73, 210], [73, 190], [71, 200], [70, 165], [75, 190], [71, 185], [76, 230], [73, 208], [68, 209], [71, 175], [72, 180], [74, 200], [77, 205], [72, 200], [76, 250], [78, 210], [81, 230], [72, 244], [73, 202], [76, 240], [72, 200], [72, 215], [74, 177], [76, 210], [73, 170], [76, 215], [75, 217], [70, 198], [71, 200], [74, 220], [72, 170], [73, 200], [76, 230], [76, 231], [73, 183], [71, 192], [68, 167], [71, 190], [71, 180], [74, 180], [77, 215], [69, 160], [72, 205], [76, 223], [75, 175], [76, 170], [75, 190], [76, 240], [72, 175], [74, 230], [76, 223], [74, 196], [72, 167], [75, 195], [78, 190], [77, 250], [70, 190], [72, 190], [79, 190], [74, 170], [71, 160], [68, 150], [77, 225], [75, 220], [71, 209], [72, 210], [70, 176], [72, 260], [72, 195], [73, 190], [72, 184], [74, 180], [72, 195], [72, 195], [75, 219], [72, 225], [73, 212], [74, 202], [72, 185], [78, 200], [75, 209], [72, 200], [74, 195], [75, 228], [75, 210], [76, 190], [74, 212], [74, 190], [73, 218], [74, 220], [71, 190], [74, 235], [75, 210], [76, 200], [74, 188], [76, 210], [76, 235], [73, 188], [75, 215], [75, 216], [74, 220], [68, 180], [72, 185], [75, 200], [71, 210], [70, 220], [72, 185], [73, 231], [72, 210], [75, 195], [74, 200], [70, 205], [76, 200], [71, 190], [82, 250], [72, 185], [73, 180], [74, 170], [71, 180], [75, 208], [77, 235], [72, 215], [74, 244], [72, 220], [73, 185], [78, 230], [77, 190], [73, 200], [73, 180], [73, 190], [73, 196], [73, 180], [76, 230], [75, 224], [70, 160], [73, 178], [72, 205], [73, 185], [75, 210], [74, 180], [73, 190], [73, 200], [76, 257], [73, 190], [75, 220], [70, 165], [77, 205], [72, 200], [77, 208], [74, 185], [75, 215], [75, 170], [75, 235], [75, 210], [72, 170], [74, 180], [71, 170], [76, 190], [71, 150], [75, 230], [76, 203], [83, 260], [75, 246], [74, 186], [76, 210], [72, 198], [72, 210], [75, 215], [75, 180], [72, 200], [77, 245], [73, 200], [72, 192], [70, 192], [74, 200], [72, 192], [74, 205], [72, 190], [71, 186], [70, 170], [71, 197], [76, 219], [74, 200], [76, 220], [74, 207], [74, 225], [74, 207], [75, 212], [75, 225], [71, 170], [71, 190], [74, 210], [77, 230], [71, 210], [74, 200], [75, 238], [77, 234], [76, 222], [74, 200], [76, 190], [72, 170], [71, 220], [72, 223], [75, 210], [73, 215], [68, 196], [72, 175], [69, 175], [73, 189], [73, 205], [75, 210], [70, 180], [70, 180], [74, 197], [75, 220], [74, 228], [74, 190], [73, 204], [74, 165], [75, 216], [77, 220], [73, 208], [74, 210], [76, 215], [74, 195], [75, 200], [73, 215], [76, 229], [78, 240], [75, 207], [73, 205], [77, 208], [74, 185], [72, 190], [74, 170], [72, 208], [71, 225], [73, 190], [75, 225], [73, 185], [67, 180], [67, 165], [76, 240], [74, 220], [73, 212], [70, 163], [75, 215], [70, 175], [72, 205], [77, 210], [79, 205], [78, 208], [74, 215], [75, 180], [75, 200], [78, 230], [76, 211], [75, 230], [69, 190], [75, 220], [72, 180], [75, 205], [73, 190], [74, 180], [75, 205], [75, 190], [73, 195]]

test = np.array([[1, 2], 
                 [3, 4], 
                 [5, 6]])
print(test);
print("...........")
print(test[:, 0]);
print("..............")

# Create a 2D numpy array from baseball: np_baseball
np_baseball = np.array(baseball);

# print np_baseball
print(np_baseball);

# Print out the type of np_baseball
print(type(np_baseball));

# Print out the shape of np_baseball
print(np_baseball.shape);


"""
Subsetting 2D NumPy Arrays

If your 2D numpy array has a regular structure, i.e. each row and column has a fixed number of values, complicated ways of subsetting become very easy. Have a look at the code below where the elements "a" and "c" are extracted from a list of lists.

# regular list of lists
x = [["a", "b"], ["c", "d"]]
[x[0][0], x[1][0]]

# numpy
import numpy as np
np_x = np.array(x)
np_x[:, 0]

Print out the 50th row of np_baseball.
Make a new variable, np_weight_lb, containing the entire
second column of np_baseball.
Select the height (first column) of the 124th baseball player 
in np_baseball and print it out.

"""
# baseball is available as a regular list of lists

# Create np_baseball (2 cols)
np_baseball = np.array(baseball)

# Print out the 50th row of np_baseball
print("50th row", np_baseball[49, :])

# Select the entire second column of np_baseball: np_weight_lb
np_weight_lb = np_baseball[:, 0]
np_weight_lb1 = np_baseball[:, 1]
print("entire first column", np_weight_lb)
print("entire second column", np_weight_lb1)


# Print out height of 124th player
print("height of 124th player", np_baseball[2, 0])


"""
2D Arithmetic

Remember how you calculated the Body Mass Index for all baseball players? numpy was able to perform all calculations element-wise (i.e. element by element). For 2D numpy arrays this isn't any different! You can combine matrices with single numbers, with vectors, and with other matrices.

Execute the code below in the IPython shell and see if you understand:

import numpy as np
np_mat = np.array([[1, 2],
                   [3, 4],
                   [5, 6]])
np_mat * 2
np_mat + np.array([10, 10])
np_mat + np_mat

np_baseball is coded for you; it's again a 2D numpy array with 3 columns representing height (in inches), weight (in pounds) and age (in years).
Instructions
100 XP

    - You managed to get hold of the changes in height, weight and age of all baseball players. It is available as a 2D numpy array, updated. Add np_baseball and updated and print out the result.
    - You want to convert the units of height and weight to metric (meters and kilograms, respectively). As a first step, create a numpy array with three values: 0.0254, 0.453592 and 1. Name this array conversion.
    - Multiply np_baseball with conversion and print out the result.

updated =  [[ 75.2303559  168.83775102  23.99      ],
            [ 75.02614252 231.09732309  35.69      ],
            [ 73.1544228  215.08167641  31.78      ],
            ...,
            [ 76.09349925 209.23890778  26.19      ],
            [ 75.82285669 172.21799965  32.01      ],
            [ 73.99484223 203.14402711  28.92      ]]

"""
# baseball is available as a regular list of lists
# updated is available as 2D numpy array

# updated
updated = np.array([[75.2303559, 168.83775102, 23.99],
                    [75.02614252, 231.09732309, 35.69],
                    [73.1544228, 215.08167641, 31.78],
                   
                    [76.09349925, 209.23890778, 26.19],
                    [75.82285669, 172.21799965, 32.01],
                    [73.99484223, 203.14402711, 28.92]])


# Create np_baseball (3 cols)
np_baseball = np.array(baseball)

# Print out addition of np_baseball and updated
# print(np_baseball + updated)

# Create numpy array: conversion
conversion = np.array([0.0254, 0.453592, 1])
print(conversion)


"""
Average versus median

You now know how to use numpy functions to get a better feeling for your data. It basically comes down to importing numpy and then calling several simple functions on the numpy arrays:

import numpy as np
x = [1, 4, 8, 10, 12]
np.mean(x)
np.median(x)

The baseball data is available as a 2D numpy array with 3 columns (height, weight, age) and 1015 rows. The name of this numpy array is np_baseball. After restructuring the data, however, you notice that some height values are abnormally high. Follow the instructions and discover which summary statistic is best suited if you're dealing with so-called outliers.
Instructions
100 XP

    Create numpy array np_height_in that is equal to first column of np_baseball.
    Print out the mean of np_height_in.
    Print out the median of np_height_in.

"""




# Create np_height_in from np_baseball
np_height_in = np.array(np_baseball[:, 0])

# Print out the mean of np_height_in
print(np.mean(np_height_in));

# Print out the median of np_height_in
print(np.median(np_height_in));

"""
Explore the baseball data

Because the mean and median are so far apart, you decide to complain to the MLB. They find the error and send the corrected data over to you. It's again available as a 2D NumPy array np_baseball, with three columns.

The Python script in the editor already includes code to print out informative messages with the different summary statistics. Can you finish the job?
Instructions
100 XP

    -The code to print out the mean height is already included. Complete the code for the median height. Replace None with the correct code.
    -Use np.std() on the first column of np_baseball to calculate stddev. Replace None with the correct code.
   - Do big players tend to be heavier? Use np.corrcoef() to store the correlation between the first and second column of np_baseball in corr. Replace None with the correct code.

"""
# np_baseball is available

# Print mean height (first column)
avg = np.mean(np_baseball[:, 0])
print("Average: " + str(avg))

# Print median height. Replace 'None'
med = np.median(np_baseball[:, 0])
print("Median: " + str(med))

# Print out the standard deviation on height. Replace 'None'
stddev = np.std(np_baseball[:, 0])
print("Standard Deviation: " + str(stddev))

# Print out correlation between first and second column. Replace 'None'
first = np_baseball[:,0]
second = np_baseball[:,1]
corr = np.corrcoef(first, second)
print("Correlation: " + str(corr))


"""
Blend it all together

In the last few exercises you've learned everything there is to know about heights and weights of baseball players. Now it's time to dive into another sport: soccer.

You've contacted FIFA for some data and they handed you two lists. The lists are the following:

positions = ['GK', 'M', 'A', 'D', ...]
heights = [191, 184, 185, 180, ...]

Each element in the lists corresponds to a player. The first list, positions, contains strings representing each player's position. The possible positions are: 'GK' (goalkeeper), 'M' (midfield), 'A' (attack) and 'D' (defense). The second list, heights, contains integers representing the height of the player in cm. The first player in the lists is a goalkeeper and is pretty tall (191 cm).

You're fairly confident that the median height of goalkeepers is higher than that of other players on the soccer field. Some of your friends don't believe you, so you are determined to show them using the data you received from FIFA and your newly acquired Python skills.
Instructions
100 XP
Instructions
100 XP

    Convert heights and positions, which are regular lists, to numpy arrays. Call them np_heights and np_positions.
    Extract all the heights of the goalkeepers. You can use a little trick here: use np_positions == 'GK' as an index for np_heights. Assign the result to gk_heights.
    Extract all the heights of all the other players. This time use np_positions != 'GK' as an index for np_heights. Assign the result to other_heights.
    Print out the median height of the goalkeepers using np.median(). Replace None with the correct code.
    Do the same for the other players. Print out their median height. Replace None with the correct code.

"""


"""
Loop over NumPy array

If you're dealing with a 1D NumPy array, looping over all elements can be as simple as:

for x in my_array :
    ...

If you're dealing with a 2D NumPy array, it's more complicated. A 2D array is built up of multiple 1D arrays. To explicitly iterate over all separate elements of a multi-dimensional array, you'll need this syntax:

for x in np.nditer(my_array) :
    ...

Two NumPy arrays that you might recognize from the intro course are available in your Python session: np_height, a NumPy array containing the heights of Major League Baseball players, and np_baseball, a 2D NumPy array that contains both the heights (first column) and weights (second column) of those players.
Instructions
100 XP

    Import the numpy package under the local alias np.
    Write a for loop that iterates over all elements in np_height and prints out "x inches" for each element, where x is the value in the array.
    Write a for loop that visits every element of the np_baseball array and prints it out.

"""
# For loop over np_height
# for key in np_height_in:
#     print(key, "inches")

# # For loop over np_baseball
# for element in np.nditer(np_baseball):
#     print(element)
