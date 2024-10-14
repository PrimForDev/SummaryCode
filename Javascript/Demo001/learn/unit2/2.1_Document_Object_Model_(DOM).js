'use strict'
//เปลี่ยน title
// let el = document.title
// console.log(el)

//เปลี่ยนตาม id
// let el1 = document.getElementById('title')
// console.log(el1)
// el1.textContent = 'เปลี่ยนข้อมูล'

//เปลี่ยนตาม tag name
// let el2 = document.getElementsByTagName('h4')
// console.log(el2)
// for (let item of el2){
//     item.textContent = 'เปลี่ยน'
// }

//เปลี่ยนตาม class name
// let el3 = document.getElementsByClassName('red-text')
// console.log(el3)
// for (let item of el3){
//     item.textContent = 'เปลี่ยน'
// }

//เปลี่ยนตาม atibute name (มักจะอยู่ในแบบ form)
// let el4 = document.getElementsByName('password')
// console.log(el4)
// let el5 = document.getElementsByName('username')
// console.log(el5)
// let el6 = document.getElementsByName('gender')
// console.log(el6)
// for (let item of el6){
//     console.log(item.getAttribute('value')) //HTMLElement

// }

//query
// let el7 = document.querySelector('.red-text') //เอาแค่ชิ้นแรก
// console.log(el7)
// let el8 = document.querySelectorAll('.red-text') //เอาแค่ชิ้นแรก
// console.log(el8)

// let el9 = document.querySelectorAll('[name="gender"]') //เอาแค่ชิ้นแรก
// console.log(el9)
// for (let item of el9){
//     console.log(item.getAttribute('value')) //HTMLElement

// }

// let el10 = document.querySelectorAll('#custom h2') //ดึงh2ในcustom
// console.log(el10)

// let el11 = document.querySelector('#custom') //ดึงh2ในcustom
// console.log(el11.textContent) //จะได้พื้นที่ว่างมาด้วย
// console.log(el11.innerText) //ได้เฉพาะข้อความ
// console.log(el11.innerHTML) //ได้h2,h3 มาด้วย
// console.log(el11.outerHTML) //ได้id มาด้วย
// el11.innerHTML = '<h6>CHANGE!</h6>'


// console.log(document.head)
// console.log(document.body)
// console.log(document.links)  //document.querySelectorAll('a')
// console.log(document.images)
// console.log(document.forms)

// let name = prompt('Your name:')
// let myName = document.getElementById('myName')
// myName.innerText = name

let x = prompt('X')
let y = prompt('Y')
let result = document.getElementById('result')
let answer = Number(x) + Number(y)
console.log(answer)
console.log(result.innerText)
result.innerText = `${x} + ${y} = ${answer}`


