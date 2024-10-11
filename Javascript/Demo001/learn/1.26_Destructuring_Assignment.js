'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

//ถอดข้อมูลออกมาใส่ลงตัวแปรทันที
// let fruits = ['apple', 'banana', 'cherry', 'durian']
// let [a, b, c, d] = fruits
// console.log(a, b, c, d)
//---------------------------------------------------
// let student = { name: 'John Doe', age: 18, grade: 3.5}
// let {name, age, grade} = student //ต้องเป็นชื่อเดียวกับ object เท่านั้น
// console.log(name, age, grade)
//---------------------------------------------------
// let student = { name: 'John Doe', age: 18, grade: 3.5}
// let {name: n, age, grade} = student //ต้องการเปลี่ยนชื่อ
// console.log(n, age, grade)
//---------------------------------------------------
// function screenResolutinon( width, height){
//     return `${width}x${height} px`
// }
// console.log(screenResolutinon (1920, 1080))
//---------------------------------------------------
// function screenResolutinon( [width, height]){
//     return `${width}x${height} px`
// }
// console.log(screenResolutinon ([1920, 1080]))
//---------------------------------------------------
// function screenResolutinon({width, height}){
//     return `${width}x${height} px`
// }
// let input = { height: 1080, width: 1920} 
// console.log(screenResolutinon (input))
//---------------------------------------------------
// function screenResolutinon({width: w, height: h}){
//     return `${w}x${h} px`
// }
// let input = { height: 1080, width: 1920} 
// console.log(screenResolutinon (input))
//---------------------------------------------------
//การวนลูปเอาทุก object มาแสดงผล
// let object = { one: 1, two: 2, three: 3}
// for (let key in object){
//     console.log(`${key}=${object[key]}`)
// }
//---------------------------------------------------
// let object = { one: 1, two: 2, three: 3}
// console.log(Object.entries(object))
// for(let [key, value] of Object.entries(object)){
//     console.log(`${key}=${value}`)
// }
//---------------------------------------------------
// let username = 'admin'
// let password = '1234'
// let auth = {
//     username: username,
//     password: password
// }
// console.log(auth)
///or
// let user = 'admin'
// let pass = '1234'
// let auth = {
//     user,
//     pass
// }
// console.log(auth)
//---------------------------------------------------
//workshop/////////
// function sendMessage(data){
//     return `Message from ${data.from} send to ${data.to}: ${data.message}`
// }
// let input = { from: 'John', to: 'Anna', message: 'Hi!'}
// let output = sendMessage(input)
// console.log(output)

// function sendMessage({from, to, message}){
//     return `Message from ${from} send to ${to}: ${message}`
// }
// let input = { from: 'John', to: 'Anna', message: 'Hi!'}
// let output = sendMessage(input)
// console.log(output)
