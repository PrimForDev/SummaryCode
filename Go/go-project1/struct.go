package main

import "fmt"

type user struct {
	FirstName  string
	LastName   string
	Department string
}

func NewUser(firstName, lastName, department string) user {
	return user{
		FirstName:  firstName,
		LastName:   lastName,
		Department: department,
	}
}

func main() {
	// Create a slice to store user structs
	var alluser = []user{}

	user1 := user{
		FirstName:  "Alexander",
		LastName:   "Johnson",
		Department: "IT",
	}

	user2 := user{"Sophia", "Martinez", "IT"}

	var user3 user
	user3.FirstName = "Olivia"
	user3.LastName = "Garcia"
	user3.Department = "HR"

	user4 := &user{
		FirstName:  "John",
		LastName:   "Doe",
		Department: "IT",
	}

	user5 := new(user)
	user5.FirstName = "James"
	user5.LastName = "Robinson"
	user5.Department = "PM"

	user6 := NewUser("Michael", "Smith", "Sales")

	// Print individual users
	fmt.Println(user1)
	fmt.Println(user2)
	fmt.Println(user3)
	fmt.Println(*user4) // Dereferencing to print
	fmt.Println(*user5) // Dereferencing to print
	fmt.Println(user6)

	// Append users to the slice (dereferencing user4 and user5 pointers)
	alluser = append(alluser, user1)
	alluser = append(alluser, user2)
	alluser = append(alluser, user3)
	alluser = append(alluser, *user4) // Append dereferenced value
	alluser = append(alluser, *user5) // Append dereferenced value
	alluser = append(alluser, user6)

	// Print the slice of all users
	fmt.Println(alluser)
}
