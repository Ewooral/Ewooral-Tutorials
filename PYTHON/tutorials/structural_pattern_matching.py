def run_command(command: str):
    match command:
        case "quit":
            print("Quitting the program..")
            quit()
        case "reset":
            print("Resetting the system")
        case other:
            print(f"Unknown command: {other!r}.")


def main():
    while True:
        command = input("s ")
        run_command(command)


if __name__ == "__main__":
    main()
