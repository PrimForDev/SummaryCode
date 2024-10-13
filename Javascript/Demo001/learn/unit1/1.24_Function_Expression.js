'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

//ฟังก์ชันแบบไม่มีชื่อ

// function plusFn (a, b){ // กำหนดฟังก์ชันไว้ตรงไหนก็ได้
//     return a + b
// }

// let plusEx = function (a, b){ // กำหนดฟังก์ชันไว้ด้านบนก่อนเรียกใช้ฟังก์ชัน
//     return a + b
// }

// let plusArrow = (a, b) => { // กำหนดฟังก์ชันไว้ด้านบนก่อนเรียกใช้ฟังก์ชัน
//     return a + b
// }

// console.log(plusFn(1, 2))
// console.log(plusEx(1, 2))
// console.log(plusArrow(1, 2))

// function greetFn (msg){
//     return `Hello ${msg}`
// }
let greetEx = function (msg){
    return `Hello ${msg}`
}
// let greetArrow =  msg => {
//     return `Hello ${msg}`
// }
// let greetArrow =  msg => `Hello ${msg}`

// console.log(greetFn(`John`))
// console.log(greetEx(`John`))
// console.log(greetArrow(`John`))

//Arrow function สามารทำเป็นการเอา function ใส่ใน object ได้
//1
// let math = {
//     path: function (a,b) {
//         return a + b
//     },
//     minus: function (a,b) {
//         return a - b
//     }
// }

// console.log(math.path(1, 2))
// console.log(math.minus(1, 2))

//2
// let math = {
//     path: (a,b) => {
//         return a + b
//     },
//     minus: (a,b) => {
//         return a - b
//     }
// }

// console.log(math.path(1, 2))
// console.log(math.minus(1, 2))

//3 - ใช้ได้เมื่อ function return ทันที
// let math = {
//     path: (a,b) => a + b,
//     minus: (a,b) => a - b
// }

// console.log(math.path(1, 2))
// console.log(math.minus(1, 2))

//4
// let math = {
//     path(a,b) { return a + b},
//     minus(a,b) {return a - b}
// }

// console.log(math.path(1, 2))
// console.log(math.minus(1, 2))

//############work shop########

// function isEven (n){
//     return n % 2 == 0
// }

let isEven = n => n % 2 == 0

console.log(isEven(1))
console.log(isEven(2))