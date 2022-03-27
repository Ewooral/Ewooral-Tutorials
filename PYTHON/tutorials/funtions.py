def increment_dictionary_values(d, i):
    
    for k, v in d.items():
        d[k] = v + i 
    return d



d = {"a":1, "b":2, "c":3}
result = increment_dictionary_values(d, 2)
print(result)







# DATACAMP TUTORIALS

# Create lists first and second
first = [11.25, 18.0, 20.0]
second = [10.75, 9.50]

# Paste together first and second: full
full = first + second

# Sort full in descending order: full_sorted
full_sorted = sorted(full,  reverse=True)

# Print out full_sorted
print(full_sorted)  # [20.0, 18.0, 11.25, 10.75, 9.5]


# string to experiment with: place
place = "poolhouse"

# Use upper() on place: place_up
place_up = place.upper()

# Print out place and place_up
print(place_up)

# Print out the number of o's in place
print(place.count("o"))

