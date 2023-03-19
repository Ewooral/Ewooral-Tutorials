package main

import "fmt"

var x int = 5

func scope() {
	x = 7
	var y int = 8

	fmt.Println(x + y)
	fmt.Println(Test)

}
