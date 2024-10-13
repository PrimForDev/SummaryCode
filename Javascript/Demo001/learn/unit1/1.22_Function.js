'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'
// function myFunction () {
//     console.log('1')
//     console.log('2')
//     console.log('3')
// }
// myFunction()
// function sayGreeting(from, to) { //การรับข้อมูล
//     if(!from){
//         return 'No from'
//     }else if(!to){
//         return 'No to'
//     }else if (typeof from !== 'string' || typeof to !== 'string'){
//         return 'Not string'
//     }
//     else{
//         return `Say hi ${to} (from ${from})`
//     }
// }

// let a = sayGreeting('A', true) // argument (การส่งข้อมูล)
// let b = sayGreeting('Joe','John')
// console.log(a)
// console.log(b)

// function plus (a, b){
//     return a + b
// }
// let result = plus(5, 10)
// console.log(result)

// function sendMessage(to, message = '(no message)'){
//     return `${to}: ${message}`
// }
// console.log(sendMessage('John', 'Hello'))
// console.log(sendMessage('Joe', 'Hi'))
// console.log(sendMessage('Joe'))

//#########workshop##########
function findMinMax (array){
    let min = array[0]
    let max = array[0]
    for(let value of array){
        if(value < min){
            min = value
        }
        if(value > max){
            max = value
        }
    }
    return {'min': min,'max': max}
}
console.log(findMinMax([1, 2, 3, 4, 5]))

let set = [10, 20, 30, 40, 50]
let result = findMinMax(set)

console.log(result.min)
console.log(result.max)