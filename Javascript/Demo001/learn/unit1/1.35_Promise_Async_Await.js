'use strict'
document.getElementById('title').innerText = 'สวัสดีครับ JavaScript ใช้งานได้'
//Asynchronous (Java scripts)
    //A =>
    //B =>
    //C =>
//Synchronous
    //A => B => C
//pomise = async/sync

// fetch('https://reqres.in/api/users?delay=5') //async ต้อง run คำสั่งนี้ให้เสร็จก่อน
//     .then((response) =>{
//         response.json()
//         .then((data)=>(
//             console.log('REAL DATA1', data)
//         ))
// })
// fetch('https://fakerapi.it/api/v1/persons') //async ต้อง run คำสั่งนี้ให้เสร็จก่อน
//     .then((response) =>{
//         response.json()
//         .then((data)=>(
//             console.log('REAL DATA2', data)
//         ))
// })
//format1---------------------------------
// fetch('https://sdfdkgkgkkgkg.com') //async ต้อง run คำสั่งนี้ให้เสร็จก่อน
//     .then((response) =>{
//         response.json()
//         .then((data)=>(
//             console.log('REAL DATA2', data)
//         ))
// })
// .catch((err) => {
//         console.log('????',err)
// })
//format2---------------------
// async function run(){
//     try {
//         let response = await fetch ('https://fakerapi.it/api/v1/persons')
//         let data = await response.json()
//         console.log('!!!!!', data)
//     } catch (error) {
//         console.log('?????', error)
//     }

// }
// run()
//--------------------------------------
// console.log('END1')
// setTimeout(() => console.log(1),3000)
// setTimeout(() => console.log(2),1000)
// setTimeout(() => console.log(3),2000)
// console.log('END2')
//--------------1-----------------------
// function setDelay(secound) {
//     let handle = function (resolve, reject){ //resolve = return, reject = throw
//         if(typeof secound !== 'number'){
//             return reject(new Error('Not a number'))
//         }
//         setTimeout(() => {
//             return resolve('Success')
//         }, secound * 1000)
//     }
//     return new Promise(handle)
// }
// function whenSuccess(string) {
//     console.log('Data?', string)
// }


// function whenError (err) {
//     console.log('Error?', err)
// }

// setDelay('3').then(whenSuccess).catch(whenError)
// setDelay(1).then(whenSuccess).catch(whenError)

//--------------2-----------------------
// function setDelayPromise(secound){
//     return new Promise((resolve, reject) => {
//         if(typeof secound !== 'number'){
//             return reject(new Error ('Not a number'))
//         }
//         setTimeout(() => {
//             return resolve('Promise: Success '+ secound)
//         }, secound * 1000)
//     })
// }

// let whenSuccessPromise = (string) => {
//     console.log('Data?', string)
// }


// let whenErrorPromise = (err) => {
//     console.log('Error?', err)
// } 

// setDelayPromise(3).then(whenSuccessPromise).catch(whenErrorPromise)
// setDelayPromise(2).then(whenSuccessPromise).catch(whenErrorPromise)
// setDelayPromise(1).then(whenSuccessPromise).catch(whenErrorPromise)
//ใช้ได้ทั้ง3แบบ
// let run = async function (){}
// let run = async () => {}
// async function run(){}

// Promise, Async/ Await
// async function run(){
//     try {
//         let str1 = await setDelayPromise(3) //awit = sync
//         console.log(str1)
//         let str2 = await setDelayPromise(2) //awit = sync
//         console.log(str2)
//         let str3 = await setDelayPromise(1) //awit = sync
//         console.log(str3)
//     } catch (error) {
//         console.log(error)
//     }

// }
// run()

//--------------3 call back-----------------------

// function setDelayCallback (secound, success, error){
//     if(typeof secound !== 'number' ){
//         return error(new Error('Callback: Not a number'))
//     }
//     setTimeout(() =>{
//         return success('Callback: Success' + secound)
//     }, secound * 1000)
// }

// let whenSuccessCallback = (string) => {
//     console.log('Data?', string)
// }


// let whenErrorCallback = (err) => {
//     console.log('Error?', err)
// }
// // setDelayCallback(3, whenSuccess, whenError)
// // setDelayCallback(2, whenSuccess, whenError)
// // setDelayCallback(1, whenSuccess, whenError)
// // callback hell (async => sync)
// setDelayCallback(3, (str1) => {
//     console.log(str1)
//     setDelayCallback(2, (str2) => {
//         console.log(str2)
//             setDelayCallback(1, (str3) => {
//                 console.log(str3)
                
//             },whenErrorCallback)
//     },whenErrorCallback)
// }
// , whenErrorCallback)


//-------workshop---------------
// function isNumber (n){
//     if(typeof n !== 'number'){
//         throw new Error('Not a number')
//     }
// }

// try{
//     isNumber('1')
// }catch(error){
//     console.log(error)
// }

//---Callback-----
function isNumberCallBack (n, cb){
    if(typeof n !== 'number' ){
        return cb(new Error('Callback: Not a number'))
    }
    return cb()
}

isNumberCallBack(1, console.log)

// //Promise
function isNumberAsync (n){
    return new Promise ((resolve, reject) =>{
        if(typeof n !== 'number' ){
            return reject(new Error('Callback: Not a number'))
        }
        return resolve()
    })

}

isNumberAsync(1).then(console.log).catch(console.log)

async function run(){
    try{
        await isNumberAsync("1")
    }catch(error){
        console.log(error)
    }
}
run()



