'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'

// function checkNumber (n){
//     if(typeof n !== 'number'){
//         throw new Error('Not a number')
//     }
//     return true
// }

// try{
//     let a = checkNumber(1)
//     let b = checkNumber('1')
//     console.log(a, b)
// }catch(error){
//     console.log(error.message)
//     console.log(error.stack)
// }finally{
//     console.log('END!')
// }

//############Workshop############################
function findCircleArea (redius) {
    if(typeof redius == 'number'){
        if(redius <= 0){
            throw new Error('Redius is invaild (must be gather 0)')
        }else{
            return Math.round(((22/7)*(redius**2))*100)/100;
            // return (22/7)*(redius**2)
        }
    }else{
            throw new Error('Redius Type is invaild (must be number)')
    }

}

let a, b, c
function exec (n){
    try {
        let result = findCircleArea(n)
        console.log(result)
    } catch (error) {
        console.warn(error)
    }
}

exec(0)
exec(5)
exec(2)
exec("0")



