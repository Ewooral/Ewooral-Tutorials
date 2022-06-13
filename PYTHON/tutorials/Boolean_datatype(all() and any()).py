print(bool(None))
print(bool(0))
print(bool(1))
print(bool(0.0))
print(bool(0.1))
print(bool(0.9))
print(bool(0.99))
print(bool(0.999))

print(bool([]))
print(bool(""))
print(bool(" "))


# any()
print()
print(any([None, 0, 1, 0.0, 0.1, 0.9, 0.99, 0.999, []]))
print(any([0, None, 0j, 0.0, []]))

print()
print("Check for Digits in a String")
print(".......................")
my_string = "coding**is**cool**345"
are_there_digits:bool = [char.isdigit() for char in my_string]
print(any(are_there_digits))
print(are_there_digits)

print()
print("Check for Letters in a String")
print("........................")
my_string1 = "***345325)))"
num:bool = [char.isalpha() for char in my_string1]
print(any(num))

#How to Use Python's any() Function to Combine Multiple Conditions with Logical OR
print()
print(" Combine Multiple Conditions with Logical OR")
print("........................")
conditions = [True, False, 4 > 10, 5 + 3 == 7, True, False]
if any(conditions):
    print("At least one condition is True")
else:
    print("All conditions are False")


# all()
print()
print("Check if all characters in string are Letters:")
print("........................")
my_string = "coding**is**cool"
are_all_letters = [char.isalpha() for char in my_string]
print(all(are_all_letters))


print()
print(" Combine Multiple Conditions with Logical AND")
print("........................")
conditions = [True,  4 < 10, 5 + 3 == 8, True]
if all(conditions):
        print("All conditions are True")
else:
    print("At least one condition is False")
