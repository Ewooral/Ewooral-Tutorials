""" 
Write a function that takes an input character
 and returns that character repeated 5 times using recursion. 
 For example, if the input is 'g', then the output 
 should be 'ggggg'.

Input: {String} char
Output: {String}
"""

counter = 0
def repeater(char):
    global counter
    if char == 5: return char
    counter += 1
    return repeater(char)

print(repeater("Elijah"))
