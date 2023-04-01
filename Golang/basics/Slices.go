package main

import "fmt"

func slices() {
	fmt.Println("This is a slice tutorial")

	/*
		* A slice is a segment of an array. Like arrays slices are indexable and have a length.
		* Unlike arrays this length is allowed to change. Here's an example of a slice:

		? var x []float64
		* The only difference between this and an array is the missing length between the brackets.
		* In this case x has been created with a length of 0.
	*/

	var x []float64
	fmt.Println(x)

	/*
		! If you want to create a slice you should use the built-in make function:
		? slice := make([] float64 2, 5)

	*/

	slice := make([]float64, 2)
	fmt.Println(slice)

	/*
		* This creates a slice that is associated with an underlying float64 array of length 5.
		* Slices are always associated with some array, and although they can never be longer
		* than the array, they can be smaller. The make function also allows a 3rd parameter:

		? slice := make([] float64, 2, 5)


		! Another way to create slices is to use the [low : high] expression:

		arr := [5]float64{1,2,3,4,5}
		x := arr[0:5]
	*/

	arr := [5]float64{1, 2, 3, 4, 5}
	slice_1 := arr[0:5]
	fmt.Println(slice_1)

}
