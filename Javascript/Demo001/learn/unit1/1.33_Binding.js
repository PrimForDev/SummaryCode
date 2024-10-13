'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'
// class CustomMath {
//     constructor(a,b){
//         this.a = a,
//         this.b = b
//     }
//     plus(){
//         return this.a + this.b
//     }
//     minus(){
//         return this.a - this.b
//     }
// }

// let math = new CustomMath(5,3)
// console.log(math.plus())
// console.log(math.minus())

// let {plus, minus} = math
// console.log(plus.call({a: 10, b: 20}))
// console.log(minus.call({a: 30, b: 10}))

//---------------------------------------------------------
// let person = {
//     name: 'John',
//     age: 18,
//     showInfo(){
//         return `${this.name} (${this.age})`
//     }
// }
// console.log(person.showInfo.call({ name: 'John', age: 19}))

// function Product(name, price){
//     this.name = name;
//     this.price = price;
// }
// function Food(name, price, number){
//     Product.call(this, name, price);
//     this.category = 'food';
//     this.number = number;
// }
// let food = new Food('cheese', 5, 10)
// console.log(food.name);
// console.log(food.price);
// console.log(food.category);
// console.log(food.number);

//---------------------------------------------------------
// class Product {
//     constructor(name, price){
//         this.name = name
//         this.price = price
//     }
// }

// class Food extends Product {
//     category = 'food'
// }
// class Electronic extends Product {
//     category = 'electronic'
// }
// let food = new Food('cheese', 5)
// console.log(food.name);
// console.log(food.price);
// console.log(food.category);
//---------------------------------------------------------

let student = {
    name: 'John',
    grade: 18,
    showInfo(){
        console.log( `${this.name} Grade: ${this.grade}`);
    }
}

// setTimeout(student.showInfo, 2000) //can't use
// setTimeout(function(){
//     student.showInfo()
// }, 2000)
// setTimeout(student.showInfo.bind(student), 2000) //can use

//---------------------------------------------------------
// let handle = () => {
//     student.showInfo()
// }
let handle = student.showInfo.bind(student)
setTimeout(handle, 2000)
