package main

import "fmt"

func name() int {
	var name string = "Elijah"
	var age int
	age = 30
	fmt.Println("My name is: ", name)
	fmt.Println("I am", age, "years old!")
	return age
}
