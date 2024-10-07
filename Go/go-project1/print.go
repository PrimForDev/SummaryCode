package main

import (
	"fmt"
)

func main() {
	var i, j string = "Hello", "World"

	fmt.Print(i)
	fmt.Print(j)
	fmt.Println(i,j)

	var a, b string = "Hello", "World"
	fmt.Print(a, "\n")
	fmt.Print(b, "\n")

	var c, d string = "Hello", "World"
	fmt.Print(c, "\n", d)

	var e, f string = "Hello", "World"
	fmt.Print(e, " ", f)

	var g, h = 10, 20
	fmt.Print(g, h)
	fmt.Printf("i has value: %v and type: %T\n", g, g)
    fmt.Printf("j has value: %v and type: %T", h, h)

}
