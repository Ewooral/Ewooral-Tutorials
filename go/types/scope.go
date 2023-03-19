package main

import "fmt"

var x int = 5

func scope() {
	x = 7
	fmt.Println(x)

}
