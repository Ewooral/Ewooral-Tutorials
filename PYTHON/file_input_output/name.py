Names = []

for _ in range(3):
    name = input("What is your name: ")
    Names.append(name)


for name in sorted(Names):
    print(f"hello,{name}")


file = open("names.text", "w")
file.write(Names[0])
file.close()

