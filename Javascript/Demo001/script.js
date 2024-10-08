'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'


// let n1 = 10
// let n2 = true
// let n3 = 'Hello'

// let array = [1, 2, 3]
// let object = { name: 'Nakorn', lastName: 'Sinpadung'}
// let n = null

// console.log(typeof array)
// console.log(typeof object)
// console.log(typeof n)
// console.log(typeof n1)
// console.log(typeof n2)
// console.log(typeof n3)

// function sayHello(name){
//     return 'HELLO!' + name
// }
// console.log(typeof sayHello)

//number type
// let n1 = 12 //Int
// let n2 = 12.52 //Floating
// let n3 = NaN // Not a Number เกิดจากการแปลงค่าแต่ค่านั้นไม่ใช่ number
// let n4 = Infinity
// console.log(n1, n2, n3, n4)

// let a = 4
// let b = 3
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b) //หารเอาเศษ
// console.log(a ** b) //ยกกำลัง2

// console.log(a++)
// console.log(a--)
// console.log(++b)
// console.log(--b)

// let count = 1
// count += 10
// console.log(count)

//workshop
// let days = 1
// console.log(days*24)

//string
// let s1 = 'Hello'
// let s2 = "Hello"
// console.log(s1, s2)

// let firstName = 'John'
// let lastName = 'Doe'
// let age = 18
// console.log(firstName + ' ' + lastName + ' (' + age + ')')

// //teplate literals (backlist)
// console.log(`${firstName} ${lastName} (${age})`)

// let x = 10
// let y = 5
// console.log(`${x} + ${y} = ${x + y}`)

// //escape character
// console.log("I'm \"programmer\"")
// console.log('I\'m "programmer"')
// console.log(`I'm "programmer"`)
// console.log('1\n\n2\n\n3')

//workshop
// let name1 = 'John'
// let name2 = 'Joe'
// let name3 = 'Jane'

// // 1. John
// // 2. Joe
// // 3. Jane
// console.log(`1. ${name1}
// 2. ${name2}
// 3. ${name3}\n`)

// console.log(`1. ${name1}\n2. ${name2}\n3. ${name3}\n`)

//Interaction
// let firstName = 'John'
// let lastName = 'Doe'
// alert(`ชื่อของคุณคือ ${firstName} ${lastName}`)
// let firstName = prompt('ระบุชื่อจริงของคุณ')'ระบุชื่อจริงของคุณ')
// let lastName = prompt('ระบุนามสกุลของคุณ')
// alert(`ชื่อของคุณคือ ${firstName} ${lastName}`)

// let x = prompt('x')
// let y = prompt('y')
// alert(Number(x)+Number(y))
 
// let areyousure = confirm('Are you sure?')
// alert(areyousure)

//workshop
// let x = prompt('X:')
// let y = prompt('Y:')
// alert(`${x}+${y}=${Number(x)+Number(y)}
// ${x}-${y}=${Number(x)-Number(y)}
// ${x}*${y}=${Number(x)*Number(y)}
// ${x}/${y}=${Number(x)/Number(y)}`)

//array
// let fruits = ['Apple','Banana','Cherry','Mango','Melon']
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])

// fruits.push('Grape')
// fruits.push('Durian')
// console.log(fruits)
// console.log(fruits.length)

// fruits[0] = 'A'
// console.log(fruits)


// let data = [1, -1, undefined, 'String', true, false]

// console.log(data)

// let table = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(table[1][2])

//workshop
// let students = [
//     ['John', 'Doe', 3.5],
//     ['Joe', 'Dan', 3.23],
//     ['Prim', 'Sin', 3.28],
//     ['Hana', 'Jeff', 2.98],
//     ['Kay', 'Tom', 3.96]

// ]

// //Hana Jeff(Grade: 3.5)
// console.log(`${students[3][0]} ${students[3][1]} (Grade: ${students[3][2]})`)

// let s3 = students[3]
// console.log(`${s3[0]} ${s3[1]} (Grade: ${s3[2]})`)
