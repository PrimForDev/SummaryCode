'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'


console.log(1, 2, 3, 4, 5)

//reset params - ถอด argreement หลายๆตวให้เป็น array ใส่ไปกี่ชิ้นก็ได้
// function sum(...numbers){
//     return numbers.reduce((p, c) => p + c, 0)
// }

// let result = sum(1, 2, 3, 4, 5)
// console.log(result)

function sum(numbers){
    return numbers.reduce((p, c) => p + c, 0)
}

let result = sum([1, 2, 3, 4, 5])
console.log(result)

//spread params - การแยกตัว array เอาไปใส่ตามตัว argreement ตามปกติ
// const min = Math.min(1, 2, 3, 4, 5, 0, -1, 5, 6, 7)
// console.log(min)

// let dataset = [1, 2, 3, 4, 5, 0, -1, 5, 6, 7]
// const min = Math.min(...dataset) //จดถอด[]ออก - คลาย array
// console.log(min)

let a = [1, 2, 3, 4]
let b = [5, 6, 7, 8]
console.log([...a, ...b])
console.log(a.concat(b))

let c = { one: 1, two: 2}
let d = { three: 3, four: 4}
console.log({...c, ...d})
console.log(Object.assign(c, d))