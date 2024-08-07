package main

import "fmt"

// Approach 1
func forLoop1() {
	fmt.Println("For Loop Approach 1: ")
	i := 1
	for i <= 10 {
		fmt.Println(i)
		i += 1
	}
}

func forLoop2() {
	fmt.Println("For Loop Approach 2: ")
	for i := 1; i <= 10; i++ {
		fmt.Println(i)
	}
}

func if_else() {
	j := 4
	for j <= 10 {
		if j%2 == 0 {
			fmt.Println(j)
		} else {
			fmt.Println("N/A")
		}
		j += 1
	}
}
