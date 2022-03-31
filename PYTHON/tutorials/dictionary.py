names = {"name": "elijah",
         "age": 34,
         "isTrue": False,
         "address": "Ashaiman"
         }
# print the names dic object
print(names)
# Accessing a value
print(names.get("name", "Not found"))

# Update
updateMe= names["address"] = "Mampong"
print(" changed name is: ", updateMe)

another = names.items()
print(type(another))
print("copied items: ", another)
print("================================")
print(names)
names["isFat"] = True
print(names["isFat"])
print("================================")
# delete items
names.pop('age')
print(names)
print("================================")

# check if a key is inside a dictionary
if "name" in names:
    print(names["name"])
else:
    print("Name is not in the dictionary")
try:
    print("Yes! the name, ", names["akwesi"], " is in the dictionary")
except:
    print("item is not in our dictionary!")

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
newDict = {0:"mary", 1:1, 2:2}
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
#the in operator takes time complexity of O(1)
print('mary' in newDict.values()) # prints out value
print('mary' in newDict) # prints out only key

isAvailable = 'mary' in newDict.values()
print("available: ", isAvailable);


print("================================")

# traverse
for key in newDict:
    print(key, newDict[key]) # O(N)


print("================================")

# all() 
print(all(newDict)) # False


print("================================")

# any() 
print(any(newDict)) # True  


print("================================")

# sorted()
strDict = {'animosity': 1, 'ani': 2, 'Ghana': 3, 'Nigeria': 4}
print("Sorted: ", sorted(newDict, reverse=True))
print(sorted(strDict, key=len))


