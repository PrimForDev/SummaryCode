package main

import (
	"fmt"
)

// array

var user2 = [3]string{"Ava", "Sophia", "Martinez"}
var user3 = [3]string{"Ethan", "Michael", "Smith"}

// slice
var user1 = []string{"Liam", "Alexander", "Johnson"}
var user4 = []string{"Mia", "Olivia", "Garcia"}
var user5 = []string{"Noah", "James", "Robinson"}
var user6 = []string{"Jan", "Janifer", "Robinson", "IT"}


func main() {
	var arr1 = [3]int{1, 2, 3}
	arr2 := [5]int{4, 5, 6, 7, 8}

	fmt.Println(arr1)
	fmt.Println(arr2)

	fmt.Println(arr1[0])
	fmt.Println(arr1[1])
	fmt.Println(arr1[2])

	fmt.Println(arr2[0])
	fmt.Println(arr2[1])
	fmt.Println(arr2[2])
	fmt.Println(arr2[3])
	fmt.Println(arr2[4])

	prices := [3]int{10,20,30}

	prices[2] = 50
	fmt.Println(prices)

	fmt.Printf("user1--Nickname: %s, Fristname: %s Lastname: %s\n", user1[0], user1[1], user1[2])
	fmt.Printf("user2--Nickname: %s, Fristname: %s Lastname: %s\n", user2[0], user2[1], user2[2])
	fmt.Printf("user3--Nickname: %s, Fristname: %s Lastname: %s\n", user3[0], user3[1], user3[2])
	fmt.Printf("user4--Nickname: %s, Fristname: %s Lastname: %s\n", user4[0], user4[1], user4[2])
	fmt.Printf("user5--Nickname: %s, Fristname: %s Lastname: %s\n", user5[0], user5[1], user5[2])

	user4 = append(user4, "IT")
	user5 = append(user5, "Sales")
	fmt.Printf("user4--Nickname: %s, Fristname: %s Lastname: %s Department: %s\n", user4[0], user4[1], user4[2], user4[3])
	fmt.Printf("user5--Nickname: %s, Fristname: %s Lastname: %s Department: %s\n\n", user5[0], user5[1], user5[2], user5[3])

	fmt.Println(user6)

	user6 = user6[:len(user6)-1]
	fmt.Println(user6)

	user6 = user6[1:]
	fmt.Println(user6)

	// Find the element "Alexander" and remove it
	var index int
	for i, v := range user1 {
		if v == "Alexander" {
			index = i
			break
		}
	}

	fmt.Println(index)
	// Remove the element at the found index
	//user1[:index]  // Results in: ["Liam"]
	//user1[index+1:]  // Results in: ["Johnson"]
	user1 = append(user1[:index], user1[index+1:]...)
	fmt.Println(user1)



}
