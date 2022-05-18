# There are (at least) two distinguishable kinds of errors: syntax errors and exceptions.

while True:
    try:
        x = int(input("Please enter a number: "))
        print(x)
        break

    except (ValueError, RuntimeError, TypeError, NameError) as err:
        print(f"Oops!...{err}")
    else:print("hmmm.. akoa ab)n")
    finally:
        print("Fuck!")


# raise NameError("Hi There!!")
