package main

import (
	"crypto/rand"
	"fmt"
	"math/big"
)

const (
	letterBytes   = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	numberBytes   = "0123456789"
	specialBytes  = "!@#$%^&*()-_=+[]{}<>?/|"
)

// GenerateRandomPassword generates a random password with letters, numbers, and special characters.
func GenerateRandomPassword(length int) (string, error) {
	allBytes := letterBytes + numberBytes + specialBytes
	password := make([]byte, length)

	for i := range password {
		// Generate a secure random number between 0 and len(allBytes)-1
		num, err := rand.Int(rand.Reader, big.NewInt(int64(len(allBytes))))
		if err != nil {
			return "", err
		}
		password[i] = allBytes[num.Int64()]
	}
	return string(password), nil
}

func main() {
	passwordLength := 12
	password, err := GenerateRandomPassword(passwordLength)
	if err != nil {
		fmt.Println("Error generating password:", err)
		return
	}
	fmt.Println("Generated Password:", password)
}
