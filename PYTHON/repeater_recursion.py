""" 
Write a function that takes an input character
 and returns that character repeated 5 times using recursion. 
 For example, if the input is 'g', then the output 
 should be 'ggggg'.

Input: {String} char
Output: {String}
"""


def repeater(char):
    string = ""
    if len(string) == 0: 
        return string
    string = string + char
    return repeater(string)
   

print(repeater("Elijah"))

