'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

// function getCurrentDate(){
//     console.log(new Date())
// }

// setTimeout(getCurrentDate, 1000) //callback
// setTimeout(getCurrentDate, 2000) //callback
// setTimeout(getCurrentDate, 3000) //callback
// setTimeout(getCurrentDate, 4000) //callback
// setTimeout(getCurrentDate, 5000) //callback

// setInterval(getCurrentDate, 1000)//callback

// function checkNumberThrow(n){
//     if(typeof n !== 'number'){
//         throw new Error('Not a number')
//     }
//     return n
// }

// function checkNumberCallback(n, callback){
//     if(typeof n !== 'number'){
//         return callback(new Error('Not a number'))
//     }
//     return callback(null, n)
// }
// let handler = function (error, data){
//     if (error){
//         console.warn(error)
//     }else{
//         console.log( data)
//     }
// }

// checkNumberCallback(1, handler)
// checkNumberCallback('1', handler)
// checkNumberCallback(2, handler)
// checkNumberCallback(3, handler)
// checkNumberCallback(4, handler)
function findCircleArea (r, callback) {
    if(typeof r == 'number'){
        if(r <= 0){
            return callback(new Error('Redius is invaild (must be gather 0)'))
        }else{
            let a = Math.round(((22/7)*(r**2))*100)/100;
            return callback(null, a)
            // return (22/7)*(redius**2)
        }
    }else{
        return callback( new Error('Redius Type is invaild (must be number)'))
    }

}

let a, b, c
let handler = function (error, data){
    if (error){
        console.warn(error)
    }else{
        console.log( data)
    }
}

findCircleArea(5, handler) //handler == callback ทำ findCircleArea จากนั้นก่อน ค่อยทำ  handler ฟังก์ชันเรียกกลับ 
findCircleArea(500, handler)
findCircleArea('5', handler)