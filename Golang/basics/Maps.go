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
	elements["Li"] = "Lithium"
	elements["Be"] = "Beryllium"
	elements["B"] = "Boron"
	elements["C"] = "Carbon"
	elements["N"] = "Nitrogen"
	elements["O"] = "Oxygen"
	elements["F"] = "Fluorine"
	elements["Ne"] = "Neon"

	fmt.Println(elements["Li"])
	fmt.Println(elements)
}
