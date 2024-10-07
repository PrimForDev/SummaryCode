package main

import (
	"fmt"
	"math/rand"
)

func main() {
	//rand.Intn(10) เป็นฟังก์ชันในภาษา Go ที่ใช้สำหรับการสุ่มตัวเลขแบบเต็ม (integer) จากแพ็กเกจ math/rand โดยจะสุ่มตัวเลขตั้งแต่ 0 ถึง 9 (รวมถึง 0 และ 9 แต่ไม่เกิน 10)
	fmt.Println("My favorite number is", rand.Intn(10))
	//math.Sqrt(7) ในภาษา Go เป็นฟังก์ชันที่มาจากแพ็กเกจ math ซึ่งใช้ในการคำนวณ square root หรือ รากที่สอง ของตัวเลขที่ใส่เข้าไป
	fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
	//ส่งออกค่า Pi
	fmt.Println(math.Pi)
}