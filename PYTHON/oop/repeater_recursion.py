""" 
Write a function that takes an input character
 and returns that character repeated 5 times using recursion. 
 For example, if the input is 'g', then the output 
 should be 'ggggg'.

Input: {String} char
Output: {String}
"""

string = ""
def repeater(char):
    if len(string) == 5: return string
    string += char
    return repeater(char)

print(repeater("Elijah"))
