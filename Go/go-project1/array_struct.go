package main

import (
	"fmt"// นำเข้าแพ็กเกจ fmt เพื่อใช้ฟังก์ชันสำหรับพิมพ์ข้อความ
	"reflect"
)

type user struct {
	FirstName  string
	LastName   string
	Department string
}

func main() {
	// Create a slice to store user structs
	var alluser = []user{
		{"Alexander", "Johnson", "IT"},
		{"Sophia", "Martinez", "IT"},
		{"Olivia", "Garcia", "HR"},
		{"John", "Doe", "IT"},
		{"James", "Robinson", "PM"},
		{"Michael", "Smith", "Sales"},
	}
	// in for, must be user (macth with struct name)
	for i, user := range alluser {
		fmt.Printf("Loop: %d\n", i)
		fmt.Println("-----Part1-----")
		fmt.Printf("FirstName: %s, LastName: %s, Department:%s\n", user.FirstName, user.LastName, user.Department)

		val := reflect.ValueOf(user)
		typ := reflect.TypeOf(user)

		fmt.Println("-----Part2-----")
		fmt.Println(val)
		fmt.Println(typ)
		fmt.Println(val.NumField())
		fmt.Println(typ.Field(0).Name)
		fmt.Println(val.Field(0).Interface())
		fmt.Println(typ.Field(1).Name)
		fmt.Println(val.Field(1).Interface())
		fmt.Println(typ.Field(2).Name)
		fmt.Println(val.Field(2).Interface())

		fmt.Println("-----Part3-----")
		// Iterate through the fields of the struct
		for i := 0; i < val.NumField(); i++ {
			fieldName := typ.Field(i).Name         // Get the field name
			fieldValue := val.Field(i).Interface() // Get the field value
			fmt.Printf("%s: %v\n", fieldName, fieldValue)
		}

		// สร้าง map เพื่อเก็บชื่อฟิลด์และชนิดข้อมูล
		typeMap := make(map[string]string)
			for i := 0; i < typ.NumField(); i++ {
				fieldName := typ.Field(i).Name
				fieldType := typ.Field(i).Type.String()
				typeMap[fieldName] = fieldType
			}
		// แปลง map เป็น JSON
		jsonTypeData, err := json.Marshal(typeMap)
		if err != nil {
					fmt.Println("Error marshalling JSON:", err)
					return
		}

		fmt.Println("-----Part4 (JSON Type Info)-----")
		fmt.Println(string(jsonTypeData))

		
	}
}
