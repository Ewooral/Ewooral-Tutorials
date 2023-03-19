package main

import "fmt"

// The variable 'Test' is available both inside and
// outside the scope of this module
var Test string = "Scope in GoLang"

func name() int {
	var name string = "Elijah"
	var age int
	age = 30
	fmt.Println("My name is: ", name)
	fmt.Println("I am", age, "years old!")
	fmt.Println(`Hey people `)
	return age
}
