package main

import (
	"fmt"

	"rsc.io/quote"
)

var x int = 5

func scope() {
	x = 7
	var y int = 8

	fmt.Println(quote.Go())
	fmt.Println(quote.Hello())
	fmt.Println(quote.Glass())
	fmt.Println(len("Hello World"))
	fmt.Println("Hello World"[1])

	fmt.Println(x + y)
	fmt.Println(Test)
	fmt.Println(NAME_OF_LANGUAGE)

}
