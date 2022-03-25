List = ["Mangoes", "Pawpaw", "Guava", "Apples"];
numList = [9, 8, 10, 11, 0, 1]
strings = "Sampson^is^a^strong^man";
delimeter = "^";

if __name__ == '__main__':

    # sort()
    numList.sort();
    print(numList);

    print("...............................................");

    # reversed()
    numList.reverse();
    print(numList);

    print("...............................................");


    # convert a char string to a list of strings using the list method
    print(list(strings));

    print("...............................................");

    # convert word strings into lists using the split method and a delimeter
    wordstrings_to_liststrings = strings.split(delimeter);
    print("list of strings: ", wordstrings_to_liststrings);

    print("...............................................");

    wordstrings_to_liststrings.reverse();
    print("reversed liststrings: ", wordstrings_to_liststrings);

    print("...............................................");

    # convert a list of strings back to a string.
    liststrings_to_wordstrings = delimeter.join(wordstrings_to_liststrings);
    print("Strings: ", liststrings_to_wordstrings);

    print("...............................................");

    # Append()
    newList = ["Cashew", "Blueberry"];
    newList.append("Oranges");
    print("New List: ", newList);

    print("...............................................");

    # extend() and sorted()
    newList.extend(sorted(List));
    numList.extend(List);
    print("extended List 1: ", numList);
    print("extended sorted List 2: ", newList);

    print("...............................................");


    # enumerate()
    for i, mylists in enumerate(newList):
        print(i, mylists);

    print("...............................................");

    j = 0;
    while j < len(newList):
        print(j, newList[j]);
        j += 1;






    





