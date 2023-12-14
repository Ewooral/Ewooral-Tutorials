package main

import "fmt"

func main() {
	var variable int64 = 100
	var variable1 bool = true
	var variable2 = "Hello World"
	var variable3 = 750.345
	var unsignedValue uint8 = 250

	// %d is used to format integers
	// %s is used to format strings
	// %f is used to format floating point numbers
	// %t is used to format booleans
	// %v is used to format any value
	// %T is used to format variables type
	// %p is used to format pointers
	// %b is used to format base 2 numbers

	fmt.Printf("Defining variables in GoLang: \n")
	fmt.Printf("Variable : %d\n", variable)
	fmt.Printf("The type of Variable: %T\n", variable)

	fmt.Printf("Variable 2: %s\n", variable2)
	fmt.Printf("The type of Variable: %T\n", variable2)

	fmt.Printf("Variable 3: %f\n", variable3)
	fmt.Printf("The type of Variable: %T\n", variable3)

	fmt.Printf("Variable 1: %t\n", variable1)
	fmt.Printf("The type of Variable: %T\n", variable1)

	fmt.Printf("Unsigned Value: %d\n", unsignedValue)
	fmt.Printf("The type of Variable: %T\n", unsignedValue)

	// Define a variable without expression and see the default value
	// for them

	var variable4 int
	var variable5 string
	var variable6 float64
	var variable7 bool
	var variable8 *int

	fmt.Printf("......Define a variable without expression: \n")
	fmt.Printf("Variable 4: %d\n", variable4)
	fmt.Printf("Variable 5: %s\n", variable5)
	fmt.Printf("Variable 6: %f\n", variable6)
	fmt.Printf("Variable 7: %t\n", variable7)
	fmt.Printf("Variable 8: %d\n", variable8)

	// Define multiple variables of the same type in a single declaration.
	var variable9, variable10, variable11 int = 2, 400, 67

	fmt.Print()
	fmt.Printf(("variable 9: %d\n"), variable9)
	fmt.Printf(("variable 10: %d\n"), variable10)
	fmt.Printf(("variable 11: %d\n"), variable11)

	// Define multiple variables of different types in a single declaration.
	var variable12, variable13, variable14, variable15 = 2, "Hello", 67.89, false

	fmt.Printf("......Define multiple variables of different types in a single declaration: \n")
	fmt.Printf("variable 12: %d\n", variable12)
	fmt.Printf("Type of variable12: %T\n", variable12)

	fmt.Printf("variable 13: %s\n", variable13)
	fmt.Printf("Type of variable13: %T\n", variable13)

	fmt.Printf("variable 14: %f\n", variable14)
	fmt.Printf("Type of variable14: %T\n", variable14)

	fmt.Printf("variable 15: %t\n", variable15)
	fmt.Printf("Type of variable15: %T\n", variable15)

	// define variables within a parenthesis

	var (
		variable16 = 2
		variable17 = "Hello"
		variable18 = 67.89
		variable19 = false
	)

	fmt.Printf("......Define variables within a parenthesis: \n")
	fmt.Printf("variable 16: %d\n", variable16)
	fmt.Printf("Type of variable16: %T\n", variable16)

	fmt.Printf("variable 17: %s\n", variable17)
	fmt.Printf("Type of variable17: %T\n", variable17)

	fmt.Printf("variable 18: %f\n", variable18)
	fmt.Printf("Type of variable18: %T\n", variable18)

	fmt.Printf("variable 19: %t\n", variable19)

	// shorthand variable declaration

	var1 := 100
	var2 := "Hello"
	var3 := 67.89
	var4 := false

	fmt.Printf("......Shorthand variable declaration: \n")
	fmt.Printf("var1: %d\n", var1)
	fmt.Printf("Type of var1: %T\n", var1)

	fmt.Printf("var2: %s\n", var2)
	fmt.Printf("Type of var2: %T\n", var2)

	fmt.Printf("var3: %f\n", var3)
	fmt.Printf("Type of var3: %T\n", var3)

	fmt.Printf("var4: %t\n", var4)
	fmt.Printf("Type of var4: %T\n", var4)

}
