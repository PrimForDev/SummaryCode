package main
import ("fmt")

func main() {
  var i = 15
 
  fmt.Printf("%b\n", i)
  fmt.Printf("%d\n", i)
  fmt.Printf("%+d\n", i)
  fmt.Printf("%o\n", i)
  fmt.Printf("%O\n", i)
  fmt.Printf("%x\n", i)
  fmt.Printf("%X\n", i)
  fmt.Printf("%#x\n", i)
  fmt.Printf("%4d\n", i)
  fmt.Printf("%-4d\n", i)
  fmt.Printf("%04d\n", i)

  var txt = "Hello"
 
  fmt.Printf("%s\n", txt)
  fmt.Printf("%q\n", txt)
  fmt.Printf("%8s\n", txt)
  fmt.Printf("%-8s\n", txt)
  fmt.Printf("%x\n", txt)
  fmt.Printf("% x\n", txt)

  var a = true
  var b = false

  fmt.Printf("%t\n", a)
  fmt.Printf("%t\n", b)

  var c = 3.141

  fmt.Printf("%e\n", c)
  fmt.Printf("%f\n", c)
  fmt.Printf("%.2f\n", c)
  fmt.Printf("%6.2f\n", c)
  fmt.Printf("%g\n", c)

}