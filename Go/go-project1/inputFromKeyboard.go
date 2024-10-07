package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var firstName, lastName string
	fmt.Print("Enter your first name and last name: ")
	fmt.Scan(&firstName, &lastName) // Reading two values from keyboard
	fmt.Printf("Hello, %s %s!\n", firstName, lastName)


	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter your name: ")
	name, _ := reader.ReadString('\n') // Read until the newline character
	fmt.Printf("Hello, %s", name)      // Name includes the newline character
}
