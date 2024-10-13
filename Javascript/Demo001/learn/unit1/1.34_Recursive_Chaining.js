'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'
//Recursive
// function pow (x, y) {
//     if(y == 1){
//         return x
//     }
//     return x * pow(x, y - 1) //x * x * x
// }

// console.log(3 ** 1)
// console.log(3 ** 2)
// console.log(3 ** 3)
// console.log(3 ** 4)

// console.log(pow(3, 1))
// console.log(pow(3, 2))
// console.log(pow(3, 3))
// console.log(pow(3, 4))

//Chaning
class BitNumber {
    result = 1
    increase (){
        this.result *= 2
        return this //need to return this to use chainning
    }
}

let bit = new BitNumber()
// bit.increase() //2
// bit.increase() //4
// bit.increase() //8
// bit.increase() //16
// bit.increase() //32
//Chaining
bit.increase().increase().increase().increase().increase()

console.log(bit.result)