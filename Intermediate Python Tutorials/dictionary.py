names = {"name": "elijah",
         "age": 34,
         "isTrue": False,
         "address": "Ashaiman"
         }

print(names)
names["isFat"] = True
print(names["isFat"])
print("================================")
# delete items
del names["isFat"]
names.pop('age')
print(names)
print("================================")

# check of a key is inside a dictionary
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
    print(key)  # Or
print("================================")
for key in names.keys():
    print(key)
print("================================")
# loop over values
for value in names.values():
    print(value)
print("================================")
# loop through both keys and values
for key, value in names.items():
    print(key, ":", value)
print("================================")
# copy dictionary
# Copying in dictionary works just as seen in (LIST).
myCopy = names.copy()
print(myCopy)
print("================================")
myCopy["name"] = "Abigail"
print(myCopy)
print(names)
print("================================")
# update a dictionary
print(names) # initial keys and values in our dictionary
names.update(myCopy)
print(names) # current updated keys and values in our dictionary
