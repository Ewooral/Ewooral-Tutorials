package main

import "fmt"

// The variable 'Test' is available both inside and
// outside the scope of this module
var Test string = "Scope in GoLang"

const NAME_OF_LANGUAGE = "GOLANG"

var Age int = 40

// Define multiple variables
var (
	a = 5
	b = 6
	c = 7
)

func name() {
	var name string = "Elijah"

	Age = 30
	fmt.Println("My name is: ", name)
	fmt.Println("I am", Age, "years old!")
	fmt.Println(`Hey people `)

	v := "Hello, World"
	fmt.Println(v, a, b, c)
}

func age() {
	Age = 80
	fmt.Println("AGE:", Age)
}
