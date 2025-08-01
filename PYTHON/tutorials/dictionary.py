names = {"name": "elijah",
         "age": 34,
         "isTrue": False,
         "address": "Ashaiman"
         }
places = dict({"Accra": "GA"})

print("================================")
# PRINT THE NAMES DICT OBJECT
print(names)
print(places)

print("================================")
# ACCESSING A VALUE
print("Access a value: ", names.get("name", "Not found"))
print("Access a value: ", names.get("height", "Not found"))
print(names["age"])

print("================================")
# UPDATE
names["address"] = "Mampong"
print("Updated: ", names)

print("================================")
# INSERT NEW ITEM
names["isFat"] = True
names.update({"haveAJob": "No!"})
print("Inserted: ", names)

print("================================")
# DELETE
names.pop("age")
names.popitem()
print("Delete: ", names)

print("================================")
# CHECK THE EXISTENCE OF A KEY
if "name" in names:
    print("Key Exists?: ", names["name"])
    print("Key Exists?: ", names.get("address", "Doesn't exist!"))
else:
    print("Name is not in the dictionary")

print("================================")
# loop over keys
for key in names:
    print('key: ', key)  # Or

print("================================")
for key in names.keys():
    print(key)
print(names.keys())
print("================================")

# loop over values
for value in names.values():
    print(value)

print("================================")

# loop through both keys and values
for key, value in names.items():
    print("Keys and values: ", key, ":", value)

print("================================")

# print just a key
print("another banger ", names.items())
for key, value in names.items():
    if value == False:
        print("Key of value False: ", key)

print("================================")

# copy dictionary
# Copying in dictionary works just as seen in (LIST).
myCopy = names.copy()
print("copied item", myCopy)
myCopy["name"] = "Abigail"
print(myCopy)
print(names)

print("================================")

# update a dictionary
print(names)  # initial keys and values in our dictionary
names.update(myCopy)
print(names)  # current updated keys and values in our dictionary

print("================================")

# fromkeys() takes two parameters, keys and a value
newDict = {0: "mary", 1: 1, 2: 2}
newCopy = {}.fromkeys([1, 2, 3], 0)  # {1: 0, 2: 0, 3: 0};
newCopy1 = {}.fromkeys([1, 2, 3], )  # {1: None, 2: None, 3: None}
print(newCopy)
print(newCopy1)

print("================================")

# keys()
print(newDict.keys());

print("================================")

# values()
print(newDict.values())

print("================================")

# popitem()
print(newDict.popitem())

print("================================")

# setdefault(), takes two para. key and default.
print("set default: ", newDict.setdefault(4, "Emmanuel"))
print(newDict)

print("================================")

# update()
newDict.update(newCopy);
print(sorted(newDict.items()))

print("================================")

# OPERATIONS  
# the in operator takes time complexity of O(1)
print('mary' in newDict.values())  # prints out value
print('mary' in newDict)  # prints out only key

isAvailable = 'mary' in newDict.values()
print("available: ", isAvailable);

print("================================")

# traverse
for key in newDict:
    print(key, newDict[key])  # O(N)

print("================================")

# all() 
print(all(newDict))  # False

print("================================")

# any() 
print(any(newDict))  # True

print("================================")

# sorted()
strDict = {'animosity': 1, 'ani': 2, 'Ghana': 3, 'Nigeria': 4}
print("Sorted: ", sorted(newDict, reverse=True))
print(sorted(strDict, key=len))

# merge dictionaries
dic1 = {"name": "elijah", "age": 29}
dic2 = {"address": "Tema", "Grade": "A"}

merge_dic = {**dic1, **dic2}
# merge_dic = dic1 | dic2
print(merge_dic)

print()
# loop over two dictionaries concurrently
for i, v in zip(dic1.values(), dic2.values()):
    print(i, "|", v)
print()
for i, v in enumerate(merge_dic.items()):
    print(i, "|", v)

print()
# convert tupte to dictionary
L = [("Jan", 1), ("Feb", 2), ("Mar", 3), ("April", 4), ("May", 5)]
print("List of tuples: ", L)

print()
convertTupleToAHashTableOrDictionary = dict(iter(L, ))
print(convertTupleToAHashTableOrDictionary)
print()
for key, value in convertTupleToAHashTableOrDictionary.items():
    print(key, value)

# CONVERT TWO LISTS INTO A DICTIONARY
years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
durations = [103, 101, 99, 100, 100, 95, 95, 96, 93, 90]

print("........")
res = {years[i]: durations[i] for i in range(len(years))}

print("........")
print(res)

# OR
print("........")
res1 = dict(zip(years, durations))
print(res1)
