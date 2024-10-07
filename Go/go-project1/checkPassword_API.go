package main

import (
	"encoding/json" // For JSON marshaling
	"fmt"
)

type User struct {
	ID       int
	Name     string
	Email    string
	Password string
}

var alluser = []User{
	{1, "John Doe", "john.doe@example.com", "77BaBg!f!#Fv"},
	{2, "Jane Smith", "jane.smith@example.com", "huy#Nqz$2ZAG"},
	{3, "Mike Johnson", "mike.johnson@example.com", "MWGA49FR?DJx"},
}

// CheckPassword ฟังก์ชันสำหรับตรวจสอบรหัสผ่าน
func CheckPassword(Email string, PW string) string {
	for _, user := range alluser {
		if Email == user.Email {
			if user.Password == PW {
				return "valid"
			}
			return "invalid"
		}
	}
	return "notfound"
}

type Output struct {
	Status int    `json:"status"`
	Detail string `json:"detail"`
}

func main() {
	EmailInput := "User1@gmail.com" // Email that doesn't exist for testing
	Password := "12345rotRe"

	checkPassword := CheckPassword(EmailInput, Password)

	var Results Output

	// Check the result and set the output accordingly
	if checkPassword == "valid" {
		Results = Output{200, "Valid"}
	} else if checkPassword == "invalid" {
		Results = Output{400, "Invalid"}
	} else {
		Results = Output{404, "NotFound"}
	}

	// Convert Results struct to JSON
	jsonTypeData, err := json.Marshal(Results)
	if err != nil {
		fmt.Println("Error marshalling JSON:", err)
		return
	}

	// Print the JSON output
	fmt.Println(string(jsonTypeData))
}
