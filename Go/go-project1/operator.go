package main
import ("fmt")

func main() {
  var a = 15 + 25
  fmt.Println(a)

  var b = 15 - 25
  fmt.Println(b)

  var c = 15 * 25
  fmt.Println(c)

  var d = 15 / 25
  fmt.Println(d)

  var e = 15 % 25
  fmt.Println(e)

  var f = 15
  f++
  fmt.Println(f)
  f--
  fmt.Println(f)

  var x = 150
  x += 3
  fmt.Println(x)
  x -= 3
  fmt.Println(x)
  x *= 3
  fmt.Println(x)
  x /= 3
  fmt.Println(x)
  x %= 3
  fmt.Println(x)
  x &= 3
  fmt.Println(x)
  x |= 3
  fmt.Println(x)
  x ^= 3
  fmt.Println(x)
  x >>= 3
  fmt.Println(x)
  x <<= 3
  fmt.Println(x)

  var k = 5
  var l = 3
  fmt.Println(k==l)
  fmt.Println(k!=l)
  fmt.Println(k>l)
  fmt.Println(k<l)
  fmt.Println(k>=l)
  fmt.Println(k<=l)

  x := 3 // Declare and assign a value to x

  // First if condition
  if x < 5 && x < 10 {
	  var check = true
	  fmt.Println("Condition 1:", check) // Output: true
  }

  // Second if condition
  if x < 5 || x < 4 {
	  var check = true
	  fmt.Println("Condition 2:", check) // Output: true
  }

  // Third if condition
  if !(x < 5 && x < 10) {
	  var check = true
	  fmt.Println("Condition 3:", check)
  } else {
	  fmt.Println("Condition 3: false")
  }

}