package main

import (
    "fmt"
    "reflect"
)

func main() {
    var x int = 42
    var y string = "hello"

    fmt.Println("Type of x:", reflect.TypeOf(x)) // Output: int
    fmt.Println("Type of y:", reflect.TypeOf(y)) // Output: string
	//or
	fmt.Printf("Type of x: %T\n", x) // Output: int
	fmt.Printf("Type of y: %T\n", y) // Output: string
}
