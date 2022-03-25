List = ["Mangoes", "Pawpaw", "Guava", "Apples"];
strings = "Sampson^is^a^strong^man";
delimeter = "^";

if __name__ == '__main__':

    # convert a char string to a list of strings using the list method
    print(list(strings));

    # convert word strings into lists using the split method and a delimeter
    wordstrings_to_liststrings = strings.split(delimeter);
    print("list of strings: ", wordstrings_to_liststrings);

    # convert a list of strings back to a string.
    liststrings_to_wordstrings = delimeter.join(wordstrings_to_liststrings);
    print("Strings: ", liststrings_to_wordstrings);

    # Append
    newList = ["Cashew", "Blueberry"];
    newList.append(List);
    print("New List: ", newList);

    # extend 
    newList.extend(List);
    print("New List: ", newList)


