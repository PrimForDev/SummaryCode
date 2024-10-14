"use strict";

// function changeMe(){
//     let result = document.getElementById('result')
//     console.log(result.innerText)
//     result.innerText = 'CHANGED'
// }

// let changeButton = document.getElementById('change')
// changeButton.onclick = changeMe
// changeButton.addEventListener('click', changeMe)

// let count = 0
// function changeMe(){
//     let result = document.getElementById('result')
//     console.log(result.innerText)
//     result.innerText = count++
// }

// function clearMe (){
//     changeButton.removeEventListener('click', changeMe)
// }
// let changeButton = document.getElementById('change')
// changeButton.addEventListener('click', changeMe)

// let clearButton = document.getElementById('clear')
// clearButton.addEventListener('click', clearMe)

//---------------------------------------------------
// let count = 0
// function changeMe(){
//     let result = document.getElementById('result')
//     console.log(result.innerText)
//     result.innerText = count++
// }

// let changeButton = document.getElementById('change')
// changeButton.addEventListener('click', changeMe)

// setTimeout(() => {
//     changeButton.removeEventListener('click', changeMe)
// },5000)

// let myInput = document.getElementById("myInput")
// let helper = document.getElementById("helper")
// let counter = document.getElementById("counter")

// // helper.style.display = 'none'
// myInput.addEventListener('blur',() =>{
//     console.log('YOU OUT!')
//     // helper.style.display = 'none'
// })

// myInput.addEventListener('focus',() =>{
//     console.log('YOU IN!')
//     helper.style.display = 'block'
// })

//ดูว่าข้อความมีการเปลี่ยนแปลงรึป่าว
// myInput.addEventListener('change',() =>{
//     console.log('CHANGED')
// })
//ดูว่าพิมพ์ไปกี่ข้อความ
// myInput.addEventListener('input',function () {
//     // console.log('INPUT')
//     console.log(this.value.length)
//     if(this.value.length > 10){
//         alert('เตือน')
//     }
//     counter.innerText = this.value.length

// myInput.addEventListener('input', (event)=> {
// console.log(event.target)
// console.log(event.target.value)
// console.log(event.target.value.length)
// })

// let outside = document.getElementById("outside")
// let inside = document.getElementById("inside")
// outside.addEventListener('click',() =>{
//     console.log('OUTSIDE')
// })
// outside.addEventListener('dblclick',() =>{
//     console.log('DOUBLE')
// })
// outside.addEventListener('contextmenu',(event) =>{
//     event.preventDefault()
//     console.log('RIGHT-CLTCK')
// })
// inside.addEventListener('click',(event) =>{
//     event.stopPropagation() //ดูแค่ event ของตัวเอง
//     console.log('INSIDE')
// })

// let buttonForm = document.querySelector('#myform button')
// buttonForm.addEventListener('click', (event) => {
//     event.preventDefault() //หยุดเรื่องเดิมๆที่จะเกิดขึ้นได้
//     console.log(myInput.value)
// })
//Enter == click type = "submit" only
// document.querySelector('[type="checkbox"]').addEventListener('click', (event) => {
//     event.preventDefault() //หยุดเรื่องเดิมๆที่จะเกิดขึ้นได้ ก็จะไม่สามารถคลิกได้
// })
// let buttonForm = document.getElementById('myform')
// buttonForm.addEventListener('submit', (event) => {
//     event.preventDefault() //หยุดเรื่องเดิมๆที่จะเกิดขึ้นได้
//     console.log(myInput.value)
// })

// document.body.addEventListener('keydown', console.log)

//--------workshop---------------------------------------
// let form = document.querySelector('form')
// // let x = document.getElementsByName('x')[0];
// // let y = document.getElementsByName('y')[0];

// let answer = null;
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let xValue = document.querySelector('[name="x"]').value;
//     let yValue = document.querySelector('[name="y"]').value;
//     let operation = document.querySelector('[name="operator"]').value;

//     // Convert inputs to numbers and handle invalid inputs
//     let x = parseFloat(xValue);
//     let y = parseFloat(yValue);
//     console.log(x)
//     console.log(y)
//     console.log(operation)

//     if (isNaN(x) || isNaN(y)) {
//         console.log("Please enter valid numbers for both x and y");
//     } else {

//         if (operation == 'plus') {
//             answer = x + y;
//         } else if (operation == 'minus') {
//             answer = x - y;
//         } else if (operation == 'multiply') {
//             answer = x * y;
//         } else if (operation == 'divide') {
//             answer = x / y;
//         } else {
//             answer = 0; // Handle invalid operations
//         }

//         console.log(answer);
//         let result = document.getElementById('result');
//         result.innerText = `${answer}`;
//     }
// })

