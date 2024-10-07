package main
import ("fmt")

var a, b, c, d int = 1, 3, 5, 7
var e, f = 6, "Hello"
g, h := 7, "World!"
const PI = 3.14

func main() {
  var student1 string = "John" //type is string
  var student2 = "Jane" //type is inferred
  x := 2 //type is inferred

  fmt.Println(student1)
  fmt.Println(student2)
  fmt.Println(x)
  a = 1
  fmt.Println(a)
  fmt.Println(b)
  fmt.Println(c)
  fmt.Println(d)  
  fmt.Println(e)  //Output: 6
  fmt.Println(f)  //Output: Hello
  fmt.Println(g)  //Output: 7
  fmt.Println(h)  //Output: World!
  
}