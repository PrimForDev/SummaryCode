// let a = { name: 'John', age: 18}
// let b = {name: 'John Doe',grade: 3.75, activeYear: 2007}

// console.log({a,b})
// console.log({...a,...b})
// console.log(Object.assign(a,b)) //เปลี่ยนแปลงข้อมูลหลักด้วย

// console.log(a)
// console.log(Object.keys(a))
// console.log(Object.values(a))
// console.log(Object.entries(a))

// for(let key in a){
//     console.log(`${key}=${a[key]}`)
// }

// for(let[key, value] of Object.entries(a)){
//     console.log(`${key}=${value}`)
// }

// let c = [['a',1],['b',2],['c',3]]
// console.log(Object.fromEntries(c))

let fruits = [
    { name: 'Apple', grade: 'A', price: 15},
    { name: 'Orange', price: 30},
    { name: 'Banana', grade: 'A', price: 10},
    { name: 'Melon', price: 40}
]

function assignGrade (value) {
    return Object.assign(value, {grade: 'B'})
}
let output = fruits.map(assignGrade)
console.log(output)
console.log(output.map(v => v.name))