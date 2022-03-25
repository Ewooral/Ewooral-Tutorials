List = ["Mangoes", "Pawpaw", "Guava", "Apples"];
strings = "Sampson^is^a^strong^man";
delimeter = "^";

# convert a char string to a list of strings using the list method
print(list(strings));

# convert word strings into lists using the split method and a delimeter
wordstrings_to_liststrings = strings.split(delimeter)
print(wordstrings_to_liststrings)



print(delimeter.join(wordstrings_to_liststrings))
