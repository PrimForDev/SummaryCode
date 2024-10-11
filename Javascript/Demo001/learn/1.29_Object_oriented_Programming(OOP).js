'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

let math = {
    plus(a, b) {
        return a + b
    },
    minus(a, b) {
        return a - b
    }
}

console.log(math.plus(3, 2))
console.log(math.minus(3, 2))

//property(key) = variable
//method = function
// let mail = {
//     sender: 'John', 
//     receiver: 'Anny', 
//     message: 'Hello!', 
//     send(){
//         return `From ${this.sender} to ${this.receiver}: ${this.message}`
//     }
// }

// console.log(mail.send())
// mail.receiver = 'Kenny'
// mail.message = 'สวัสดีครับ'
// console.log(mail.send())

//cameCase 
//snake_case
//PascalCase
//construstor
// function Mail({sender, receiver, message}) {
//     this.sender = sender || `(no value)`
//     this.receiver = receiver || `(no value)`
//     this.message = message || `(no value)`
//     this.send = function () {
//         return `From ${this.sender} to ${this.receiver}: ${this.message}`
//     }
// }

class Mail {
    version = '1.0.0'
    construstor({ sender, receiver, message }) {
        this.sender = sender || `(no value)`
        this.receiver = receiver || `(no value)`
        this.message = message || `(no value)`
    }
    send() {
        return `From ${this.sender} to ${this.receiver}: ${this.message}`
    }
    static checkVersion(){ //Static methods ไม่จำเป็นต้องสร้าง instance
        return '1.0.0'
    }
}
console.log(Mail.version)
//mail1 construstor = instance
let mail1 = new Mail({ sender: 'John', receiver: 'Anny', message: 'Hello!' })
mail1.version = `1.1.0`
console.log(mail1.version)
console.log(mail1.send())
//mail2 construstor = instance
let mail2 = new Mail({})
mail2.sender = 'Joe'
console.log(mail2.version)
console.log(mail2.send())

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
////Instance methods
let date = new Date('2022-01-31')
console.log(date.getDate())
console.log(date.getDay())


console.log(Date.now())
