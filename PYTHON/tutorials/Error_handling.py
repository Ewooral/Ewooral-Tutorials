while True:
    try:
        x = int(input("Please enter a number: "))
        print(x)
        break

    except (ValueError, RuntimeError, TypeError, NameError) as err:
        print(f"Oops!...{err}")
        # raise
    finally:
        print("Fuck!")