""" 
Problem Statement
You're developing a one-player game for people to pass the time with. The player is given a grid of tiles from 0 to 9 like this:

4 4 4 4
5 5 5 4
2 5 7 5
The player selects one of these tiles, and that tile will disappear, along with all the connected tiles of the same number. Tiles can be connected adjacently up, down, left, or right.

Write a function that takes in a grid of tiles, and the row and column indexes of a selected tile on the grid, and returns the number of tiles that will disappear.

The grid is guaranteed to be rectangular. All values in the grid will be integers between 0 and 9. The input row and column are zero-indexed integers, and will always be on the grid.

Example Input
Given the grid above, say that the 4 in the upper left corner (row 0 and column 0) was selected. In that case, 5 tiles would disappear as shown below.

 [4] >4< >4< >4<
  5   5   5  >4<
  2   5   7   5
If the 5 just below it is selected (row 1 and column 0), these four tiles disappear. Note that tiles are not connected diagonally, so the 5 in the bottow right does not disappear. We would output 4.

  4   4   4   4 
 [5] >5< >5<  4
  2  >5<  7   5
Finally, if no tiles around the selected tile have the same number, only the selected tile disappears. Here, if we choose the 7 at row 2 column 2, we return 1.

  4   4   4   4
  5   5   5   4
  2   5  [7]  5
  
"""





from re import I
print(I)

def binary_search(array, item):
  array.sort()
  low = 0
  high = len(array) - 1
  
  while low <= high:
    middle_index = (low + high) // 2;
    guess = array[middle_index]
    if guess == item:
      return middle_index, item;
    elif guess > item:
      high = middle_index - 1
    else: 
       low = middle_index + 1
      
  return [] 
print(binary_search([3,2,1,4,2,5,6,0,9], 1))



def productOfArray(array): # Product of array where i is not equal to j
  # array.sort()
  product = [1] * len(array); 
  for i in range(len(array)): 
    currentProduct = 1;
    for j in range(len(array)):
      if i != j :
        currentProduct *= array[j]
    product[i] = currentProduct;
  return product;


print(productOfArray([3, 2, 1, 4, 2, 5, 6, 0, 9]));
print(productOfArray([5, 1, 4, 2]));


def product_of_pairs(array):
  maxProduct = 0;
  for i in range(len(array)):
    for j in range(i+1, len(array)):
      # if array[i] * array[j] > maxProduct:
        maxProduct = array[i] * array[j];
        pairs = str(array[i]) + "," + str(array[j]) + "," + str(maxProduct)
  return pairs 



print(product_of_pairs([5, 1, 4, 2]));
print(product_of_pairs([3, 2, 1, 4, 2, 5, 6, 0, 9]));


def countdown(i):
  if i >= 0:
    print(i)
    countdown(i-1)

countdown(10);