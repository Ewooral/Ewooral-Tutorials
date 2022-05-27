def run_command(command: str):
    match command:
        case "quit":
            print("Quitting the program..")
            quit()
        case "reset":
            print("Resetting the system")
        case other:
            print(f"Unknown command: {other!r}.")


def run_command_v2(command: str):
    match command.split():
        case ["load", filename]:
            print(f"Loading file: {filename}")
        case ["save", filename]:
            print(f"Saving to file: {filename}")
        case ["quit" | "exit" | "bye", *rest]:
            print("Quitting the program.")
            quit()
        case _:
            print(f"Unknown command: {command!r}.")


def main():
    while True:
        command = input("s ")
        # run_command(command)
        run_command_v2(command)


if __name__ == "__main__":
    main()
