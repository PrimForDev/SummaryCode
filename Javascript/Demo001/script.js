'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

//############1.3 Type System###############
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

//############1.5 number type###############
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

//############1.6 string type###############
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

//#################1.7 Interaction###########################
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

//#################1.8 array###########################
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

//#################1.9 object###########################
// let studentObj = { 
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 18,
//     grade: 3.23,
//     isActive: true,
//     'custom-field': false
// }
// console.log(`${studentObj.firstName} ${studentObj.lastName} (Age: ${studentObj.age})`)
// console.log(`${studentObj["custom-field"]}`)
// let getKay = 'grade'
// console.log(`${studentObj.getKay}`)
// console.log(`${studentObj[getKay]}`)

// studentObj.age = 19
// studentObj.reward = 2
// console.log(`${studentObj.reward}`)
// delete studentObj['custom-field']
// console.log(`${studentObj['custom-field']}`)

// let data = {
//     a: { first: 5152, seound: 6123, third: 6122},
//     b: {first: 124, secound: 723}
// }
// console.log(data.a.third)
// console.log(data.c?.third)

//#############work shop###################################
// let students = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         grade: 3.5
//     },
//     {
//         firstName: 'Jane',
//         lastName: 'Doe',
//         grade: 3
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Doe',
//         grade: 4
//     },
//     {
//         firstName: 'James',
//         lastName: 'Doe',
//         grade: 2
//     },
//     {
//         firstName: 'Joly',
//         lastName: 'Doe',
//         grade: 2.5
//     }
// ]
// console.log(students[2])
// console.log(`${students[2].firstName} ${students[2].lastName} (Grade: ${students[2].grade})`)

//##############Compare Object##############################
// let a1 = ['a','b','c'] //0x1
// let a2 = ['a','b','c'] //0x2
// console.log(a1 == a2) //==>> เทียบตำแหน่งข้อมูล
// let o1 = { a: 123, b: 456}
// let o2 = { a: 123, b: 456}

// let n1 = 10
// let n2 = 10

// console.log(typeof a1)
// console.log(typeof o1)
// console.log(typeof n1)

// console.log(_.isEqual(a1, a2))  //use lodash

// console.log(o1 == o2)
// console.log(n1 == n2)

// let text = 'Hello'
// let copy = text
// copy = 'Hi!'
// console.log(copy)
// console.log(text)
// let obj = {a: 1, b: 2, c: 3}
// let copy = _.cloneDeep(obj) //use lodash
// copy.a = 10
// copy.b = 20
// console.log(copy)
// console.log( obj)

//############1.10 logic (if-else)##############
// let a = 5
// let b = 10

// console.log('a == b', a == b)
// console.log('a != b', a != b)
// console.log('a < b', a < b)
// console.log('a <= b', a <= b)
// console.log('a > b', a > b)
// console.log('a >= b', a >= b)

// let age = 100

// if (age >= 50){
//     console.log('Elder')
//     console.log('สูงวัย')
// }else if (age >= 18){
//     console.log('Adult')
//     console.log('ผู้ใหญ่')
// }else{
//     console.log('Young')
//     console.log('เด็ก')
// }

// console.log('จบการทำงาน')

// ระบบ login

// let username = prompt('Username:')
// let password = prompt('Password')

// if(username == 'admin' && password == '1234'){
//     alert(`OK!`)
// }else{
//     alert(`Incrorect`)
// }

// let input = Number(prompt())

// if(input>=1 && input <= 9){
//     alert(`1 - 9`)
// }else{
//     alert(`NO!`)
// } 

// let javascript = confirm(`JS?`)
// let python = confirm(`PY?`)

// if(javascript || python){
//     alert(`OK`)
// }else{
//     alert()
// }

// let input = prompt()
// let areYouOk = confirm(`Are you ok?`)
// if(!areYouOk){
//     alert(`Ok your type`+ input)
// }else{
//     alert(`...`)
// }

// console.log(Boolean(''))
// console.log(Boolean('abc'))
// console.log(Boolean('123'))
// console.log(Boolean(' '))
// console.log(Boolean(0))
// console.log(Boolean(1))
// console.log(Boolean(-1))
// console.log(Boolean(null))
// console.log(Boolean(undefined))

//workshop
// let score = prompt('Score')

// if(score < 0 || score > 100){
//     alert('Error!')
// } else if (score < 50){
//     alert('F')
// }
// else if (score < 60){
//     alert('D')
// }
// else if (score < 70){
//     alert('C')
// }
// else if (score < 80){
//     alert('B')
// }
// else{
//     alert('A')

// }

//###########1.12 logic shorthand  if else#######################
// let age = prompt('Age:')
// age >= 18 ? alert ('OK') : alert ('NO')

// let isAdmin = confirm('Are you admin?')
// let username = isAdmin ? 'ADMIN':'MEMBER'

//######################workshop#################################
// let question = `What is 5 + 10 = ?

// (A = 7) (B = 9) (C = 15) (D = 16)`

// let input = prompt(question)
// (input == 'C' || input == 'c')? alert('Correct') : alert('Incorrect')

//#############1.13 Logic swich case################################
// let input = 'a'
// switch (input) {
//     case 1:
//         console.log('One')
//         break
//     case 2:
//         console.log('Two')
//         break
//     case 3:
//         console.log('Three')
//         break
//     case 'a':
//     case 'A':
//         console.log('Ant')
//         break
//     case 'b':
//     case 'B':
//         console.log('Bird')
//         break
//     default:
//         console.log('Error!')
//         break 
// }

//######################workshop#################################
// let question = `What is 5 + 10 = ?

// (A = 7) (B = 9) (C = 15) (D = 16)`

// let input = prompt(question)
// switch (input) {
//     case 'c':
//     case 'C':
//         alert('Correct')
//         break
//     case 'a':
//     case 'A':
//     case 'b':
//     case 'B':
//     case 'd':
//     case 'D':
//         alert('Incorrect')
//         break
//     default:
//         alert('Error!')
//         break 
// }

//#################1.14 Logic Strict comparison##########
// let a = '000000001234'
// let b = 1234

// console.log( a == b) //จะทำการแปลง ชนิดก่อนค่อยเทียบกัน
// console.log( a != b)
// console.log( a === b) //check type ด้วย
// console.log( a !== b) //check type ด้วย

//###############1.15 Logic Default value################
// let color = prompt('What color?') || 'Black'

// alert('Your shirt is ' + color)

// console.log( 0||1)
// console.log( 0||2)
// console.log( 2||3)
// ใช้งานไม่ได้บางกรณีเช่น
// let num = Number(prompt('Number:'))||10
// alert(num)

// console.log( 0 || 1)
// console.log( 0 || 2)
// console.log( 0 ?? 1) //ใช้ได้เฉพาะ undefined
// console.log( 0 ?? 2)
// let num = Number(prompt('Number:'))??10
// alert(num)
// let u 
// let a = ''
// console.log(u||5)
// console.log(a||5)

//##########workshop#########################
// let playerName = prompt('Player name:')
// alert(playerName||'Player')

//###########1.16 Variable scope##############
// let input = 10

// if (input >= 10){
//     //local
//     let output = 'OK'
//     console.log(output)
// }else{
//     let output = 'NO'
//     console.log(output)
// }
////////////
// let input = 10
// let output //gobal

// if (input >= 10){
    
//     output = 'OK'
// }else{
//     output = 'NO'
// }

//#############1.17 Loop while######################
// let n = 1
// let max = 10
// while(n <= max){
//     console.log(n++)
// }

// let arr = ['a','b','c','d','e','f']
// let index = 0
// while(index < arr.length){
//  console.log(arr[index])
//  index++
// }

//###########workshop############################
// let playerName = prompt('Player name:')

// while(playerName == ''||playerName == null){
//     playerName = prompt('Player name:')
// }
// alert(playerName)


//#############1.18 Loop do while######################
// let playerName
// do {
//     playerName = prompt('Player name:')
// }while(!playerName)
// alert(playerName)

//#############1.19 Loop for######################
// let max = 10
// for(let i=0;i<max;i++){
// console.log(i)
// }

// let array = ['a','b','c','d']
// let object = {one: 1, two: 2, three: 3}

// for(let i=0;i<array.length;i++){
// console.log(array[i])
// }

// ///foreach
// for(let item of array){
//     console.log(array)
// }
// ///foreach ใช้กับ object
// for(let key in object){
//     console.log(key, object[key])
// }

// let set = [1,2,3,4,5]
// let result = 0

// for(let n of set){
//     result += n
// }
// console.log(result)
let set = [2, 1, 3, 5, 4, 10, 8, 2, -1, 5]
let max = set[0]
let min = set[0]
for(let n of set){
    if(n < min){ 
        min = n
    }
    if(n > max){
        max = n
    }
}

console.log(`min: ${min}`)
console.log(`max: ${max}`)


