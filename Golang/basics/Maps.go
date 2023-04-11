package main

import "fmt"

func maps() {
	// var x map[string]int
	// x["key"] = 10
	// fmt.Println(x["key"])

	x := make(map[string]int)
	x["key"] = 10
	fmt.Println(x["key"])
	useMap()

}

func useMap() {
	elements := make(map[string]string)
	elements["H"] = "Hydrogen"
	elements["He"] = "Helium"

	fmt.Println(elements)
}
