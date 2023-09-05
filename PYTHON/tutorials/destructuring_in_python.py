list_of_items = ["A", "B", "C"]

for counter, item in enumerate(list_of_items):

    if item == "C":
        continue
    print(counter, ": ", item)
