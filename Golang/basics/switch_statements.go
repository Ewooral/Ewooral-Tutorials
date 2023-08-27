package main

import "fmt"

func switchStatement() {

	for i := 0; i <= 4; i++ {
		switch i % 2 {
		case 0:
			fmt.Println("Even number")
		case 1:
			fmt.Println("Odd number")
		default:
			fmt.Println("Unknown Number")
		}
	}

}
