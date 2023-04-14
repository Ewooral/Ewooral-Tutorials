package main

import "fmt"

func Array() {
	//? ARRAY CREATION
	//* var keyword followed by a variable, square bracket representing the array length, and a type
	var x [2]float64
	x[0] = 1
// 	x[1] = 2

	var y [4]int
	y[3] = -2

	var names [3]string
	names[0] = "Elijah"
	names[1] = "Moses"
	names[2] = "David"

	fmt.Println(x, y, names)
	fmt.Println()

	//? NORMAL LOOP
	for i := 0; i < len(y); i++ {
		fmt.Println(y[i])
	}

	/*
		@param total, value
	*/

	//? SPECIAL ARRAY LOOP
	var total float64 = 0
	// for i, value := range x{
	// since i is declared but never used, we want to replace it with an underscore
	for _, value := range x {
		total += value
		// i or _ represent current index position
		// value represent current value
	}
	fmt.Println(total / float64(len(x)))

	//? SHORTER ARRAY SYNTAX
	//
	arr := [5]float64{1, 2, 3, 4, 5}
	fmt.Println(arr)

}
