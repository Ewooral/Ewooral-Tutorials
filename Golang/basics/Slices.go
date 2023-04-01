package main

import "fmt"

func slices() {
	fmt.Println("This is a slice tutorial")

	/*
		* A slice is a segment of an array. Like arrays slices are indexable and have a length.
		* Unlike arrays this length is allowed to change. Here's an example of a slice:

		? var x []float64
	*/

	var x []float64
	fmt.Println(x)
}
